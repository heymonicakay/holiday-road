import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";
import { dialog } from "../details/DetailDialog.js";
import { getItineraries, useItineraries, saveItinerary } from "./ItineraryProvider.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")
const saveButton = document.querySelector (".save-btn")

eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveItinerary"){
          console.log("SAVE ITINERARY CLICKED")
            const eat = document.querySelector("#eaterySelect")
            const biz = document.querySelector("#bizSelect")
            const park = document.querySelector("#parkSelect")
            console.log(eat.value, "EAT VALUE")
            if (eat.value == "0") {
                console.log("Please select an eatery")
            }
            if (biz.value == "0") {
                console.log("Please select a biz")
            }
            if (park.value == "0") {
                console.log("Please select a park")
            }
            else {

            const newItinerary = {
                  eatery: eat.value,
                  park: park.value,
                  bizarrie: biz.value,
                  timestamp: Date.now()
            }

            saveItinerary(newItinerary)
            }
      }
})

const save = {
      park: false,
      eat: false,
      bizChosen: false
}

export const enableSaveButton = () => {
      if (save.park && save.eat && save.biz) {
          saveButton.disabled = false;
      }
}

eventHub.addEventListener("parkSelected", e => {
    const foundPark = e.detail.fullName

    if(foundPark === "0"){
        parkTarget.innerHTML = ``
        save.park = false;
        enableSaveButton()
    }
    else {
        parkTarget.innerHTML = `
        ${ParkHTML(foundPark)}
        ${dialog("park")}
        `
        save.park = true;
        enableSaveButton()
    }
})

eventHub.addEventListener("eaterySelected", e => {
      const eatId = e.detail.eateryId

      eatTarget.innerHTML = `
            ${EateryHTML(eatId)}
            ${dialog("eat")}
      `
      save.eat = true;
      enableSaveButton()
})

eventHub.addEventListener("bizSelected", e => {
      const bizId = e.detail.bizId

      bizTarget.innerHTML = `
        ${BizHTML(bizId)}
        ${dialog("biz")}
      `

      save.biz = true;
    enableSaveButton()

})