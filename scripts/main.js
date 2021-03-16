import { BizSelect } from "./bizarries/BizSelect.js";
import { BizHTML } from "./bizarries/BizHTMLGenerator.js"
import { EaterySelect } from "./eateries/EaterySelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import "./weather/WeatherProvider.js";
import "./weather/WeatherList.js";
import "./itineraries/ItinList.js"
import "./itineraries/ItineraryPreview.js"
import "./itineraries/ItineraryProvider.js"
import { ItinList } from "./itineraries/ItinList.js"
import { enableSaveButton } from "./itineraries/ItineraryPreview.js"

const eventTarget = document.querySelector(".main")
const bizDropdown = document.querySelector("#bizSelect")
const bizTarget = document.querySelector(".container--biz");

BizSelect()

const itinPreview = {
  park: "",
  eat: "",
  biz: "",
}
eventTarget.addEventListener("click", (e) => {
  if (e.target.id === "saveItinerary") {
    const eat = document.querySelector("#eaterySelect");
    const park = document.querySelector("#parkSelect");

    const newItinerary = {
      eatery: eat.value,
      park: park.value,
      bizarrie: itinPreview.biz,
      timestamp: Date.now(),
    };

    saveItinerary(newItinerary);
  }
});

bizDropdown.addEventListener("change", (e) => {
  if (e.target.value !== "0") {
        const bizName = e.target.value
        itinPreview.biz = bizName
        
        enableSaveButton(itinPreview);
    }
    else{
        itinPreview.biz = ''
        console.log("itinPreview", itinPreview);
        enableSaveButton(itinPreview);
    }
  })

EaterySelect()
ParkSelect()

ItinList()
