import { BizSelect } from "./bizarries/BizSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import { renderItinList } from "./itineraries/ItinList.js";
import { enableSave, findObj, qs } from "./utils.js";
import { useParks } from "./parks/ParkProvider.js";
import { useEateries } from "./eateries/EateryProvider.js";
import { useBizAttractions } from "./bizarries/BizProvider.js";
import { itineraryPreviewHTML } from "./itineraries/itineraryHTML.js"
import { itinPreview } from "./itineraries/itineraryPreview.js";
import { showForecast } from "./weather/WeatherList.js"

import "./weather/WeatherProvider.js";
import "./weather/WeatherList.js";
import "./itineraries/ItinList.js"
import "./itineraries/ItineraryPreview.js"
import "./itineraries/ItineraryProvider.js"

const app = qs(".main")
const dropdown = qs(".container--all-selectors")
let zip = "37221"

const renderSelectElements = () => {
    BizSelect();
    EaterySelect();
    ParkSelect();
}

const startApp = () => {
    renderSelectElements();
    renderItinList();
    itineraryPreviewHTML(itinPreview);
    showForecast(zip);
}

startApp()
app.addEventListener("click", (e) => {
    const id = e.target.id
    switch (id) {
        case "saveItinerary":
            const newItinerary = {
                eatery: itinPreview.eat,
                park: itinPreview.park,
                bizarrie: itinPreview.biz,
                timestamp: Date.now(),
            };
            saveItinerary(newItinerary);
        break;

        case "dialog-box--":
            console.log("dialog box clicked")
        break;
    }
});

dropdown.addEventListener("change", (e) => {
    const parkSelectValue = qs(`#parkSelect`).value;
    const eatSelectValue = qs(`#eatSelect`).value;
    const bizSelectValue = qs(`#bizSelect`).value;

    const id = e.target.id;
    const targetValue = e.target.value
    let found = {};
  switch (id) {
    case "bizSelect":
        found = findObj(useBizAttractions(), targetValue)
        {found ? itinPreview.biz = found : itinPreview.biz = {}}

    break;

    case "parkSelect":
        found = findObj(useParks(), targetValue);
        if(found){
            itinPreview.park = found
            showForecast(found)
        }else{
            itinPreview.park = {};
            showForecast(zip)
        }
    break;

    case "eatSelect":
        found = findObj(useEateries(), targetValue);
        {found ? itinPreview.eat = found : itinPreview.eat = {}}
    break;
  }
    enableSave(itinPreview, parkSelectValue, eatSelectValue, bizSelectValue);
    itineraryPreviewHTML(itinPreview)

});

