import { usePark, getPark } from "./ParkProvider.js";

const contentTarget = document.querySelector(".container--nat-park-select")
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", changeEvent => {

    const customEvent = new CustomEvent("parkSelected", {
        detail: {
            fullName: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
})


const render = parkCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Please select a National Park...</option>
        ${
            parkCollection.map(parkObject => {
                    return `<option value="${parkObject.id}">${parkObject.fullName}</option>`
                }
            ).join("")
        }
    </select>
    `
    
}

export const ParkSelect = () => {
    getPark()
    .then(() => {
        const park = usePark()
        render(park)
    })
}