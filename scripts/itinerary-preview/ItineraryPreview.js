
const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".btn--save")


export const itineraryDispatch = (itinerary) => {
    const jsonItinerary = JSON.stringify(itinerary)

    return fetch('http://localhost:8087/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonItinerary
})
}