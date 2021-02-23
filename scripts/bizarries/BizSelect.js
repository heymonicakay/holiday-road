import { useBiz, getBiz } from "./BizProvider.js";
import { shuffle } from "../utils.js"

const bizSelect = document.querySelector(".container--biz-select")
const eventHub = document.querySelector(".main")

bizSelect.addEventListener("change", e => {
    if (e.target.value !== "0") {
        const evt = new CustomEvent("bizSelected", {
            detail: {
                bizId: e.target.value
            }
        })
        eventHub.dispatchEvent(evt)
    }
})

const render = arr => {
    const bizArray = shuffle(arr)
    bizSelect.innerHTML = `
    <select class="dropdown" id="bizSelect">
        <option value="0">Choose a Bizarrie...</option>
        ${bizArray.map(b => `<option value="${b.name}">${b.name}</option>`).join("")}
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