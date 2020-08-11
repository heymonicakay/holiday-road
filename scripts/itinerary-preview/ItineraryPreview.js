import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";
import { bizDialog, eatDialog, parkDialog } from "../details/DetailDialog.js";
import { getItineraries, useItineraries, saveItinerary } from "./ItineraryProvider.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")
const saveButton = document.querySelector (".save-btn")

eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "saveItinerary"){
            const selectedEatery = document.querySelector("#eaterySelect")
            const selectedBiz = document.querySelector("#bizSelect")
            const selectedPark = document.querySelector("#parkSelect") 

            if (selectedEatery.value != "0" && selectedBiz.value != "0" && selectedPark.value != "0"){

            const newItinerary = {
                  eatery: selectedEatery.value,
                  park: selectedPark.value,
                  bizarrie: selectedBiz.value,
                  timestamp: Date.now()
            }
        
            saveItinerary(newItinerary)
            }
      }
})

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
      const foundPark = event.detail.fullName

      parkTarget.innerHTML = `
            ${ParkHTML(foundPark)}
            ${parkDialog()}
      `
      saveCheckList.userPickedPark = true;
      enableSaveButton()
})

eventHub.addEventListener("eaterySelected", event => {
      const foundEatery = event.detail.eateryId

      eatTarget.innerHTML = `
            ${EateryHTML(foundEatery)}
            ${eatDialog()}
      `
      saveCheckList.userPickedEatery = true;
      enableSaveButton()
})
  
eventHub.addEventListener("bizSelected", event => {
      const foundBiz = event.detail.bizId

      bizTarget.innerHTML = `
           ${BizHTML(foundBiz)}
            ${bizDialog()}
      `

      saveCheckList.userPickedBizarrie = true;
          enableSaveButton()
  
})