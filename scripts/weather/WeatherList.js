import { useWeatherData } from "./WeatherProvider.js";
import { ForecastHTML, DayOfTheWeek } from "./WeatherHTMLGenerator.js"

const contentTarget = document.querySelector(".container--forecast")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("forecastHasBeenCaptured", customEvent => {
      FilterWeather()
})

export const FilterWeather = () => {
      let weatherData = useWeatherData()
      const fiveDayForecast = weatherData.filter(weather => {
            if (weather.dt_txt.split(" ")[1] === "12:00:00") {
                  return true
            }
      })
      showForecast(fiveDayForecast)
}
export const showForecast = (fiveDayForecast) => {

      contentTarget.innerHTML = fiveDayForecast.map(
           (thisDay) => {
                  return `
                        <section class="forecast">
                              ${DayOfTheWeek(thisDay)}
                              ${ForecastHTML(thisDay)}
                        </section>
                  `
            }).join("")
            eventHub.addEventListener("forecastHasBeenCaptured", customEvent => {
            FilterWeather()
            })
}
