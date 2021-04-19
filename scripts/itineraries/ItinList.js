import { useItineraries, getItineraries } from "./ItineraryProvider.js";
import { itineraryHTML } from "./itineraryHTML.js";

const itinerarySection = document.querySelector(".container--saved-itineraries")

export const renderItin = () => {
    let itineraries = useItineraries()
    itinerarySection.innerHTML = itineraries.map(i => itineraryHTML(i)).reverse().join("")
}

export const renderItinList = () => {
    getItineraries()
        .then(()=> renderItin())
}
