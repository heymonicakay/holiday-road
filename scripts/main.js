import { BizSelect } from "./bizarries/BizSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { ParkSelect } from "./parks/ParkSelect.js";
import "./weather/WeatherProvider.js";
import "./weather/WeatherList.js";
import "./itineraries/ItinList.js"
import "./itineraries/ItineraryPreview.js"
import "./itineraries/ItineraryProvider.js"
import { ItinList } from "./itineraries/ItinList.js"

const bizDropdown = document.querySelector("#bizSelect")
BizSelect()

const itinPreview = {
    park: '',
    eat: '',
    biz: ''
}

bizDropdown.addEventListener("change", (e) => {
  if (e.target.value != "0") {
        const bizName = e.target.value
        console.log("what is returned when user selects a bizarre destination--", bizName);
      itinPreview.biz = bizName
      console.log(
        "itinPreview",
        itinPreview
      );
    }
  })

EaterySelect()
ParkSelect()

ItinList()
