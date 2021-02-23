import { getDayOfTheWeek } from "../utils.js"
export const WeatherCard = (day) => {
    const html = `
        <div class="forecast--card">
            <div class="heading heading--forecast-card">
                    ${getDayOfTheWeek(day)}
            </div>
            <div class="forecast-card--details">
                    <span class="forecast-card--image">
                        <img class="image forecast-image" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png">
                    </span>
                    <span class="temp--high">
                        ${Math.round(day.main.temp_max)}&deg; F
                    </span>
                    <span class="temp--low">
                        ${Math.round(day.main.temp_min)}&deg; F
                    </span>
            </div>
        </div>
    `
    return html
}