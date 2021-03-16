import { keys } from "../Settings.js"

let parks = []

export const usePark = () => {
    return [...parks]
}

export const getPark = () => fetch(`https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}`)
    .then(res => res.json())
    .then(data => parks = data.data);
