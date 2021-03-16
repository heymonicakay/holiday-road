import { useBiz, getBiz } from "./BizProvider.js";
import { BizOption } from "./BizHTMLGenerator.js"

//get a reference to the DOM element
const contentTarget = document.querySelector("#bizSelect");

const renderBizDropdown = bizCollection => {
    // renders biz dropdown menu items to the DOM
    // start with a default option
    let dropdownHTML = `
        <option value="0">Please select a bizarre destination...</option>
    `
    // iterate over biz collection
    bizCollection.forEach(bizObject => {
        // for every object in collection,
        // generate HTML string (option)
        // append option to dropdown HTML
        dropdownHTML += BizOption(bizObject)
    })
    // replace content on DOM with dropdown HTML
    contentTarget.innerHTML = dropdownHTML
}

export const BizSelect = () => {
    // get the bizarre attractions
    getBiz()
    // wait for it...
    .then(() => {
        // store a copy of the data (array) in biz
        const biz = useBiz()
        // invoke render function with arg: biz (data array)
        renderBizDropdown(biz);
    })
}

