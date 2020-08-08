import { useEatery, getEatery } from "./EateryProvider.js";

const contentTarget = document.querySelector(".container--eat-select")
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", changeEvent => {
    console.log(changeEvent.target.value)
    const customEvent = new CustomEvent("eaterySelected", {
        
        detail: {
            eateryId: changeEvent.target.value
        }
    })

    eventHub.dispatchEvent(customEvent)
})


const render = eateryCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="eaterySelect">
        <option value="0">Please select a Restaurant...</option>
        ${
            eateryCollection.map(eateryObject => {
                    return `<option value="${eateryObject.businessName}">${eateryObject.businessName}</option>`
                }
            ).join("")
        }
    </select>
    `
}



export const EaterySelect = () => {
    getEatery()
    .then(() => {
        const eatery = useEatery()
        render(eatery)
    })
}