import { BizHTML } from "../bizarries/BizHTMLGenerator.js";
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { ParkHTML } from "../parks/ParkHTMLGenerator.js";
import { dialog } from "../details/DetailDialog.js";
import { saveItinerary } from "./ItineraryProvider.js";

const eventHub = document.querySelector(".main")
const bizTarget = document.querySelector(".container--biz")
const eatTarget = document.querySelector(".container--eatery")
const parkTarget = document.querySelector(".container--nat-park")
const saveButton = document.querySelector (".save-btn")

eventHub.addEventListener("click", e => {
    if (e.target.id === "saveItinerary"){
        const eat = document.querySelector("#eaterySelect").value
        const biz = document.querySelector("#bizSelect").value
        const park = document.querySelector("#parkSelect").value

        const newItinerary = {
            eatery: eat,
            park: park,
            bizarrie: biz,
            timestamp: Date.now()
        }
        
        saveItinerary(newItinerary)
    }
})

const save = {
      park: false,
      eat: false,
      biz: false
}

export const enableSaveButton = () => {
      if (save.park && save.eat && save.biz) {
          saveButton.disabled = false;
      }
}

eventHub.addEventListener("parkSelected", e => {
    const foundPark = e.detail.fullName

    if( foundPark === "0" ){
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

const previewSection = document.querySelector(".container--iten-prev")

previewSection.addEventListener("click", click => {
    if(click.target.id.startsWith("details--")) {
        const [_, type, detail] = click.target.id.split("--")
        if(type === "eat"){
            const e = new CustomEvent ("eatDetailsClicked", {
                detail: {
                    eatChosen: detail
                }
            })
            eventHub.dispatchEvent(e)
        }
        if(type === "biz"){
            const e = new CustomEvent ("bizDetailsClicked", {
                detail: {
                    bizChosen: detail
                }
            })
            eventHub.dispatchEvent(e)
        }
        if(type === "park"){
            const e = new CustomEvent ("parkDetailsClicked", {
                detail: {
                    parkChosen: detail
                }
            })
            eventHub.dispatchEvent(e)
        }

    }
})