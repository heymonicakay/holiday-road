
import { getBiz, useBiz } from "../bizarries/BizProvider.js";
import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { useEatery, getEatery } from "../eateries/EateryProvider.js";
import { getPark, usePark } from "../parks/ParkProvider.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";

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
    getPark()
    .then(() => {
        const park = usePark()
    })
    parkRender(foundPark)
})

eventHub.addEventListener("eaterySelected", event => {

    const eateryThatWasSelected = event.detail.eateryId
    const allEateries = useEatery()
    const foundEatery = allEateries.find(eateryObj => {
        return eateryObj.id === (parseInt(eateryThatWasSelected))
    })
    getEatery()
    .then(() => {
        const eatery = useEatery()
    })
    eatRender(foundEatery)
})

eventHub.addEventListener("bizSelected", event => {

    const bizThatWasSelected = event.detail.bizId
    const allBiz = useBiz()
    const foundBiz = allBiz.find(bizObj => {
        return bizObj.id === (parseInt(bizThatWasSelected))
    })
    getBiz()
    .then(() => {
        const biz = useBiz()
    })
    bizRender(foundBiz)
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