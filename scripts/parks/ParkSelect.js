import { useParks, getParks } from "./ParkProvider.js";
import { ParkOption } from "./ParkHTMLGenerator.js"

const contentTarget = document.querySelector("#parkSelect");

const renderParkDropdown = parkCollection => {
    let dropdownHTML = `
                <option value="0">Please select a park...</option>
            `;
    parkCollection.forEach((parkObject) => {
      dropdownHTML += ParkOption(parkObject);
    });
    contentTarget.innerHTML = dropdownHTML;

}

export const ParkSelect = () => {
    getParks().then(() => {
        const parksArray = useParks()
        renderParkDropdown(parksArray);
    })
}