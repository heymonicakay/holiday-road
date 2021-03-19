// exports BizHTML() and BizOptionHTML()
import { detailsButton } from "../details/DetailDialog.js";

export const BizHTML = (itinPreviewObj) => {
    let bizHTML = `
      <section class="preview--biz">
            <div>
                ${
                  itinPreviewObj.biz.name
                    ? itinPreviewObj.biz.name
                    : "No bizarre attraction selected."
                }
            </div>
      `;
    if (itinPreviewObj.biz.name) {
        bizHTML += detailsButton("biz", itinPreviewObj);
    }
    bizHTML += `</section>`;

    return bizHTML;
};

export const BizOption = (bizObject) => {
  // returns HTML string for single biz object
  // displayed in dropdown menu for bizarre attractions
  return `<option value="${bizObject.name}">${bizObject.name}</option>`;
}