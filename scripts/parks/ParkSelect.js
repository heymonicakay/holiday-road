import { usePark, getPark } from "./ParkProvider.js";

const contentTarget = document.querySelector(".container--nat-park-select")
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", e => {
    const custom = new CustomEvent("parkSelected", {
        detail: {
            fullName: e.target.value
        }
    })
    eventHub.dispatchEvent(custom)
})


const render = parkCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Please select a national park...</option>
        ${
            parkCollection.map(parkObject => {
                    return `<option value="${parkObject.fullName}">${parkObject.fullName}</option>`
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