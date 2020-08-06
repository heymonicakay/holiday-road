import { keys } from "../Settings.js";

const eventHub = document.querySelector(".container")

let weather = []
      

export const getWeather = ( parkObj ) => {
      return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${parkObj.postalCode}&cnt=48&units=imperial&appid=20a56fc71e8cb7dbfebfd4cd961766af`)
            .then(response => response.json())
            .then(parsedData => {
                  weather = parsedData
            })
}

export const useWeather = () => weather.slice()


      