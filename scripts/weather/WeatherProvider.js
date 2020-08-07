import { keys } from "../Settings.js"
import { usePark } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("parkSelected", event => {
      const parkThatWasSelected = event.detail.fullName
      const allPark = usePark()
      const foundPark = allPark.find(parkObj => {
          return parkObj.id === (parkThatWasSelected)
      })
      const [ postalCode, _] = foundPark.addresses[0].postalCode.split("-")
  
      getWeatherData(postalCode)
      console.log(getWeatherData(postalCode))
})

let forecast = []
export const getWeatherData = ( postalCode ) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/?zip=${postalCode}&units=imperial&cnt=48&appid=${keys.weatherKey}`)
        .then(response => response.json())
        .then(parsedWeather => {
            forecast = parsedWeather.list
            console.log(forecast, "TEST FORECAST in getWeatherData")
        })
        .then(useWeatherData)
        .then(dispatchForecastCaptured)
        .then(console.log("forecast captured event dispatched"))
}
export const useWeatherData = () => {
      return forecast.slice()
}

export const dispatchForecastCaptured = () => {
      const forecastCaptured = new CustomEvent("forecastHasBeenCaptured")
      eventHub.dispatchEvent(forecastCaptured)
      console.log("Forecast has been captured.")
}
      