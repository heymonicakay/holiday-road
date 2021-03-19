import { keys } from "../Settings.js"

let parksArray = []

export const useParks = () => [...parksArray]


export const getParks = () => fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}`)
    .then(res => res.json())
    .then(data => parksArray = data.data);
