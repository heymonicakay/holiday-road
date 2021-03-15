import { useBiz, getBiz } from "./BizProvider.js";
import { BizOption } from "./BizHTMLGenerator.js"

const contentTarget = document.querySelector("#bizSelect");
const eventHub = document.querySelector(".main")

contentTarget.addEventListener("change", e => {
    if (e.target.value != "0") {
        const customEvent = new CustomEvent("bizSelected", {
            detail: {
                bizId: e.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)

        // console.log checkpoint, start...
        console.log("what is returned when user selects a bizarre destination--", e.target.value)
        ///console.log checkpoint, end...

    }
})

const renderBizDropdown = bizCollection => {
    let dropdownHTML = `
        <option value="0">Please select a bizarre destination...</option>
    `
    bizCollection.forEach(bizObject => {
        dropdownHTML += BizOption(bizObject)
    })
    contentTarget.innerHTML = dropdownHTML

}

export const BizSelect = () => {
    getBiz()
    .then(() => {
        const biz = useBiz()
        renderBizDropdown(biz);
    })
}

