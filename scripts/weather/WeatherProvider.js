import { keys } from "../Settings.js"
import { usePark } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("parkSelected", event => {
      const parkThatWasSelected = event.detail.fullName
      const allPark = usePark()
      const foundPark = allPark.find(parkObj => {
          return parkObj.fullName === (parkThatWasSelected)
      })
      const [ postalCode, _] = foundPark.addresses[0].postalCode.split("-")
  
      getWeatherData(postalCode)
})

let forecast = []
export const getWeatherData = ( postalCode ) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/?zip=${postalCode}&units=imperial&appid=${keys.weatherKey}`)
         .then(response => response.json())
        .then(parsedWeather => {
            forecast = parsedWeather.list
        })
        .then(useWeatherData)
        .then(dispatchForecastCaptured)
}
export const useWeatherData = () => {
      return forecast.slice()
}

export const dispatchForecastCaptured = () => {
    const forecastCaptured = new CustomEvent("forecastHasBeenCaptured")
    eventHub.dispatchEvent(forecastCaptured)
}
      