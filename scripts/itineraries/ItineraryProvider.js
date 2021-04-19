import { zero, clear } from  "../utils.js"
import { showForecast } from "../weather/WeatherList.js"
import { renderItinList } from "./ItinList.js"

let itineraries = []

const url = "https://holiday-road-api.herokuapp.com/itineraries"

export const saveItinerary = (i) => {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(i),
    })
      .then(() => renderItinList())
      .then(resetItineraryPreview())
}

export const useItineraries = () => [...itineraries]

export const getItineraries = () => fetch(`${url}`)
.then(res => res.json())
.then(data => itineraries = data)


const resetItineraryPreview = () => {
    zero("eat")
    zero("biz")
    zero("park")
    clear("eatery")
    clear("biz")
    clear("nat-park")
    document.querySelector("#saveItinerary").disabled = true
    showForecast("37221")
}
