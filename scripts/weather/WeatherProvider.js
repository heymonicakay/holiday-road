import { useParks } from "../parks/ParkProvider.js"

let forecast = {}

export const getZip = (parkObj) => {
    const postalCode = parkObj.addresses[0].postalCode.split("-")[0];
    return postalCode
}

export const getWeatherData = ( zip ) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast/?zip=${zip}&units=imperial&appid=20a56fc71e8cb7dbfebfd4cd961766af`
    )
      .then((res) => res.json())
      .then((data) => {
        const fiveDay = []
        const arr = data.list

        for (let i = 0; i < arr.length; i++) {
          if (i === 0 || i === 7 || i === 15 || i === 23 || i === 31) {
            fiveDay.push(arr[i])
          }
        }

        forecast.city = data.city.name
        forecast.fiveDay = fiveDay

        return forecast
      })
}
