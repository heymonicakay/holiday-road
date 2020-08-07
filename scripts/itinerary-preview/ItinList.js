
import { getBiz, useBiz } from "./BizProvider.js";
import { BizHTML } from "./BizHTMLGenerator.js";
import { EateryHTML } from "./EateryHTMLGenerator.js";
import { useEatery, getEatery } from "./EateryProvider.js";
import { getPark, usePark } from "./ParkProvider.js";
import { ParkHTML } from "./ParkHTMLGenerator.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")

eventHub.addEventListener("parkSelected", event => {
    const parkThatWasSelected = event.detail.fullName
    const allPark = usePark()
    const foundPark = allPark.find(parkObj => {
        return parkObj.id === (parkThatWasSelected)
    })
    parkRender(foundPark)
})

eventHub.addEventListener("eaterySelected", event => {

    const eateryThatWasSelected = event.detail.eateryId
    const allEateries = useEatery()
    const foundEatery = allEateries.find(eateryObj => {
        return eateryObj.id === (parseInt(eateryThatWasSelected))
    })
    console.log(foundEatery)
    render(foundEatery)
})

eventHub.addEventListener("bizSelected", event => {

    bizThatWasSelected = event.detail.bizId
    const allBiz = useBiz()
    const foundBiz = allBiz.find(bizObj => {
        return bizObj.id === (parseInt(bizThatWasSelected))
    })
    console.log(foundBiz)
    render(bizRender)
})

const parkRender = foundPark => {

    parkTarget.innerHTML = `
        <article>
           ${ParkHTML(foundPark)}
        </article>
    `
}

const bizRender = foundBiz => {

    bizTarget.innerHTML = `
        <article>
           ${BizHTML(foundBiz)}
        </article>
    `
}

const eatRender = foundEatery => {

    eatTarget.innerHTML = `
        <article>
           ${EateryHTML(foundEatery)}
        </article>
    `
}

export const BizList = () => {
    getBiz()
    .then(() => {
        const biz = useBiz()
        render(biz)
    })
}

export const EateryList = () => {
    getEatery()
    .then(() => {
        const eatery = useEatery()
        render(eatery)
    })
}

export const ParkList = () => {
    getPark()
    .then(() => {
        const park = usePark()
        render(park)
    })
}