const eventHub = document.querySelector(".main")

let itineraries = []

const dispatchStateChangeEvent = () => {
    const itinerariesStateChangedEvent = new CustomEvent("itinerariesStateChanged")
    eventHub.dispatchEvent(itinerariesStateChangedEvent)
}

export const saveItinerary = (itinerary) => {
    const jsonItinerary = JSON.stringify(itinerary)

    return fetch('http://localhost:8087/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonItinerary
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}

export const useItineraries = () => {
    return itineraries.slice()    
}

export const getItineraries = () => {
    return fetch('http://localhost:8087/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}


  
  