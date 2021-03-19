import { WeatherCard } from "./WeatherCard.js"
import { getWeatherData, getZip } from "./WeatherProvider.js";
import { qs } from "../utils.js"

const weatherTarget = qs(".container--five-day");

const WeatherList = (data) => {
    let weatherHTML = `
        <h3 class="heading--forecast">5-Day Forecast</h3>
        <h3>${data.city}</h4>
        <article class="container--forecast">
    `;

    data.fiveDay.forEach((day) => {
        weatherHTML += WeatherCard(day);
    });

    weatherHTML += `</article>`
    return weatherHTML
}
export const showForecast = (park) => {
    let zip = ''
    if(typeof park === "string"){
        zip = park
    } else {
        zip = getZip(park)
    }
    getWeatherData(zip).then(data =>{
        weatherTarget.innerHTML = WeatherList(data);
    })
}
