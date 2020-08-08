import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";
import { itineraryDispatch } from "./ItineraryPreview.js";
import { useItinerary, getItinerary } from "./SaveItineraryButton.js";
import { itineraryHTML } from "./itineraryHTML.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")
const itineraryTarget = document.querySelector(".container--saved-itineraries")

eventHub.addEventListener("parkSelected", event => {
    parkRender(event.detail.fullName)
})

eventHub.addEventListener("eaterySelected", event => {
    eatRender(event.detail.eateryId)

})

eventHub.addEventListener("bizSelected", event => {
    bizRender(event.detail.bizId)
})
eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent.target.id)
    if (clickEvent.target.id === "saveItinerary"){
        const selectedEatery = document.querySelector("#eaterySelect")
        const selectedBiz = document.querySelector("#bizSelect")
        const selectedPark = document.querySelector("#parkSelect") 

        const newItinerary = {
            eatery: selectedEatery.value,
            park: selectedPark.value,
            bizarrie: selectedBiz.value
        }
        
        itineraryDispatch(newItinerary).then(() => {
        getItinerary().then(() => {
        const itin = useItinerary()
        itinRender(itin)
        })
    })
    }
})

const parkRender = foundPark => {

    parkTarget.innerHTML = `
        <article>
           ${ParkHTML(foundPark)}
        </article>
    `
}

const itinRender = savedItin => {

    const itinToString = savedItin.map(

        (currentItin) => {
            return itineraryHTML(currentItin)
        }
    ).join("")

    itineraryTarget.innerHTML = itinToString
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