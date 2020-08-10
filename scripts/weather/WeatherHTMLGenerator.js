export const DayOfTheWeek = (weather) => {
      const daysOfTheWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
      ]
      const date = new Date(weather.dt * 1000)

      const day = date.getDay()

      return `
                  ${daysOfTheWeek[day]}
            `
}

export const ForecastHTML = (weather) => {
return `
            <span class="container--weather-image">
                  <img class="image weather-image" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
            </span>
            <div class="forecast--temps">
                  <span class="temp--high">
                  High: ${Math.round(weather.main.temp_max)}&deg; F
                  </span>
                  <span class="temp--low">
                  Low: ${Math.round(weather.main.temp_min)}&deg; F
                  </span>
            </div>
`
}