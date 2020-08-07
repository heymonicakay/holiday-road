import { useWeatherData, getWeatherData } from "./WeatherProvider.js";
import { ForecastHTML } from "./WeatherHTMLGenerator.js"

const contentTarget = document.querySelector(".container--forecast")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("forecastHasBeenCaptured", customEvent => {
      const weather = useWeatherData()
      return showForecast(weather)
})

export const showForecast = (weather) => {
      contentTarget.innerHTML = `
      ${ForecastHTML(weather)}
      ` 
      console.log(weather[0], "TEST weather.weather")
}
