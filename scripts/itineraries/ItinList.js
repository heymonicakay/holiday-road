import { useItineraries, getItineraries } from "./ItineraryProvider.js";
import { itineraryHTML } from "./itineraryHTML.js";

const itinerarySection = document.querySelector(".container--saved-itineraries")
const eventHub = document.querySelector(".main")

export const renderItin = () => {
    let itineraries = useItineraries()
    itinerarySection.innerHTML = itineraries.map(i => itineraryHTML(i)).reverse().join("")
}

export const renderItinList = () => {
    getItineraries()
        .then(useItineraries())
        .then(renderItin())
}

eventHub.addEventListener("itinerariesStateChanged", () => {
    const data = useItineraries()
    renderItin(data)
})