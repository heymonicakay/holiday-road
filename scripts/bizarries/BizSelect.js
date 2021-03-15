import { useBiz, getBiz } from "./BizProvider.js";
import { BizOption } from "./BizHTMLGenerator.js"

const contentTarget = document.querySelector("#bizSelect");

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

