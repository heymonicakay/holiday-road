import { useEateries, getEateries } from "./EateryProvider.js";
import { EatOption } from "./EateryHTMLGenerator.js";


//get a reference to the DOM element
const contentTarget = document.querySelector("#eatSelect");

const renderEatDropdown = eateryCollection => {
    let dropdownHTML = `
            <option value="0">Please select an eatery...</option>
        `;

        eateryCollection.forEach(eatObject => {
            dropdownHTML += EatOption(eatObject)
        })
        contentTarget.innerHTML = dropdownHTML
}



export const EaterySelect = () => {
    getEateries().then(() => {
      const eateriesArray = useEateries();
      renderEatDropdown(eateriesArray);
    });
}