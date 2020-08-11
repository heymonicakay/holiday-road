import { useItineraries, getItineraries } from "./ItineraryProvider.js";
import { itineraryHTML } from "./itineraryHTML.js";

const itineraryTarget = document.querySelector(".container--saved-itineraries")
const eventHub = document.querySelector(".main")

export const renderItin = () => {
    let itineraries = useItineraries()
    itineraryTarget.innerHTML = itineraries.map(
        (itinObj) => {
            return itineraryHTML(itinObj)
        }
        ).join("")
}

export const ItinList = () => {
    getItineraries()
        .then(useItineraries)
        .then(renderItin)
} 

eventHub.addEventListener("itinerariesStateChanged", () => {
    const newItineraries = useItineraries()
    renderItin(newItineraries)
})