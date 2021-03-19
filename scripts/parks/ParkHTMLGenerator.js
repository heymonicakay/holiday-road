import { detailsButton } from "../details/DetailDialog.js"
export const ParkHTML = (itinPreviewObj) => {
      let parkHTML = `
      <section class="preview--park">
            <div>
                ${itinPreviewObj.park.fullName
                    ? itinPreviewObj.park.fullName
                    : "No park selected."}
            </div>
      `;
        if(itinPreviewObj.park.fullName){
          parkHTML += detailsButton("park", itinPreviewObj)
        }
        parkHTML += `</section>`

        return parkHTML
}

export const ParkOption = (parkObject) => {
  return `<option value="${parkObject.fullName}">${parkObject.fullName}</option>`;
};
