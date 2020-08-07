// this is invoking functions to display the selected options

// import SaveButton()

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".btn--save")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItinerary"){
        const customEvent = new CustomEvent ("saveClicked")
        eventHub.dispatchEvent(customEvent)
        console.log("test")
    }
})

// example of .startsWith() method
// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id.startsWith("saveItinerary")){
//         const customEvent = new CustomEvent ("saveClicked")
//         eventHub.dispatchEvent(customEvent)
//         console.log("test")
//     }
// })

export const renderSaveButton = () => {
    contentTarget.innerHTML =`
    <button id="saveItinerary">Save Itinerary</button>
    `
}