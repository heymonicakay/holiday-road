const eventHub = document.querySelector(".main")

let itineraries = []

const dispatchStateChangeEvent = () => {
    const itinerariesStateChangedEvent = new CustomEvent("itinerariesStateChanged")
    eventHub.dispatchEvent(itinerariesStateChangedEvent)
}

export const saveItinerary = (itinerary) => {
    const jsonItinerary = JSON.stringify(itinerary)

    return fetch('https://my-json-server.typicode.com/heymonicakay/holiday-road', {
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
    return fetch('https://my-json-server.typicode.com/heymonicakay/holiday-road')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}



