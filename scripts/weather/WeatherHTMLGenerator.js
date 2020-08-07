export const ForecastHTML = (weather) => {
    return `
          <section class="forecast-card">
                Timestamp: ${weather[0].dt}
                <div class="container--weather-image">
                      <img class="image weather-image" src="http://openweathermap.org/img/wn/${weather[0].weather[0].icon}@2x.png">
                </div>
                <div class="forecast--temp">
                      ${weather[0].main.temp}&deg; F
                </div>
          </section>
    `
}