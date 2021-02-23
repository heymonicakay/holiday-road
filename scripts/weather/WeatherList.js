import { WeatherCard } from "./WeatherCard.js"

const contentTarget = document.querySelector(".container--forecast")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("forecastHasBeenCaptured", e => {
    contentTarget.innerHTML = "";
    let data = e.detail.weather
    filterWeather(data)
})

const filterWeather = (data) => {
    if(data){
        const forecast = data.filter(w => w.dt_txt.split(" ")[1] === "12:00:00")
        showForecast(forecast)
    }
}

const showForecast = (data) => {
    contentTarget.innerHTML = data.map(d => {
        let card = WeatherCard(d)
        return card
    }).join("")
}
