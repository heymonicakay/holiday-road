import { keys } from "../Settings.js"

const eventHub = document.querySelector(".container")
let weather = [] 
      

export const useWeather = () => weather.slice()
      

export const getWeather = () => {
      return fetch("http://api.openweathermap.org/data/2.5/forecast?q=${nashville}&cnt=48&units=imperial&appid=20a56fc71e8cb7dbfebfd4cd961766af")
            .then(response => response.json())
            .then(parsedData => {
                  weather = parsedData
            })
}
   

// listens for 

      