import { usePark } from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".main")
const forecastSection = document.querySelector(".container--forecast")

eventHub.addEventListener("parkSelected", e => {

    const park = e.detail.fullName
    if(park === "0"){
        forecastSection.innerHTML = `No park selected.`
    }
    else {
        forecastSection.innerHTML = `Fetching forecast...`
        const allPark = usePark()
        const foundPark = allPark.find(p => p.fullName === park)
        const [ zip, _] = foundPark.addresses[0].postalCode.split("-")
        getWeatherData()
    }
})

const getWeatherData = () => {
    console.log("GET WEATHER")
    return fetch(`http://api.openweathermap.org/data/2.5/forecast/?zip=37221&units=imperial&appid=20a56fc71e8cb7dbfebfd4cd961766af`)
         .then(res => res.json())
         .then(data => dispatchForecastCaptured(data.list))
}

const dispatchForecastCaptured = (data) => {

    const forecast = new CustomEvent("forecastHasBeenCaptured", {
        detail: {
            weather: data
        }
    })
    eventHub.dispatchEvent(forecast)
}
