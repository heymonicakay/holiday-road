import { useBiz, getBiz } from "./BizProvider.js";

const contentTarget = document.querySelector(".container--biz-select")
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", changeEvent => {
if (changeEvent.target.value != "0") {
    const customEvent = new CustomEvent("bizSelected", {
        detail: {
            bizId: changeEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
<<<<<<< HEAD
    
    // console.log checkpoint, start...
    console.log("what is returned when user selects a bizarre destination--", changeEvent.target.value)
    ///console.log checkpoint, end...

=======
}
>>>>>>> master
})


const render = bizCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="bizSelect">
        <option value="0">Please select a bizarre destination...</option>
        ${
            bizCollection.map(bizObject => {
                    return `<option value="${bizObject.name}">${bizObject.name}</option>`
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