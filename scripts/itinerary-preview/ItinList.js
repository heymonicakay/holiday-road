import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";
import { bizDialog, eatDialog, parkDialog } from "../details/DetailDialog.js";
import { itineraryDispatch } from "./ItineraryPreview.js";
import { useItinerary, getItinerary } from "./SaveItineraryButton.js";
import { itineraryHTML } from "./itineraryHTML.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")
const itineraryTarget = document.querySelector(".container--saved-itineraries")
const saveButton = document.querySelector(".save-btn")

const saveCheckList = {
    userPickedPark: false,
    userPickedEatery: false,
    userPickedBizarrie: false
}

export const enableSaveButton = () => {
    if (saveCheckList.userPickedPark && saveCheckList.userPickedEatery && saveCheckList.userPickedBizarrie) {
        saveButton.disabled = false;
    }
}
eventHub.addEventListener("parkSelected", event => {
    parkRender(event.detail.fullName)
    saveCheckList.userPickedPark = true;
    enableSaveButton()
})

eventHub.addEventListener("eaterySelected", event => {
    eatRender(event.detail.eateryId)
    saveCheckList.userPickedEatery = true;
    enableSaveButton()
})

eventHub.addEventListener("bizSelected", event => {
    bizRender(event.detail.bizId)
    saveCheckList.userPickedBizarrie = true;
        enableSaveButton()

})
eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent.target.id)
    if (clickEvent.target.id === "saveItinerary"){
        const selectedEatery = document.querySelector("#eaterySelect")
        const selectedBiz = document.querySelector("#bizSelect")
        const selectedPark = document.querySelector("#parkSelect") 

        if (selectedEatery.value != "0" && selectedBiz.value != "0" && selectedPark.value != "0"){

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
    else{ window.alert("Please select all options.")}
}
})

const parkRender = foundPark => {

    parkTarget.innerHTML = `
        <article class="preview--park-contain">
           ${ParkHTML(foundPark)}
        </article>
        ${parkDialog()}
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
        <article class="preview--biz-contain">
           ${BizHTML(foundBiz)}
        </article>
            ${bizDialog()}
    `
}

const eatRender = foundEatery => {
    eatTarget.innerHTML = `
        <article class="preview--eat-contain">
           ${EateryHTML(foundEatery)}
        </article>
        ${eatDialog()}
    `
}

const renderSaveButton = () => {
    
    contentTarget.innerHTML =`
    
    `
}