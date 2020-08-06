import { useBiz, getBiz } from "./BizProvider.js";

const contentTarget = document.querySelector(".container__select-list")
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", changeEvent => {

    const customEvent = new CustomEvent("bizSelected", {
        detail: {
            bizId: changeEvent.target.value
        }
    })

    eventHub.dispatchEvent(customEvent)
})


const render = bizCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="bizSelect">
        <option value="0">Please select a Bizarre Destination...</option>
        ${
            bizCollection.map(bizObject => {
                    return `<option value="${bizObject.id}">${bizObject.name}</option>`
                }
            ).join("")
        }
    </select>
    `
}



export const BizSelect = () => {
    getBiz()
    .then(() => {
        const biz = useBiz()
        render(biz)
    })
}