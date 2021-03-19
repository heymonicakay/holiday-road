import { detailsButton } from "../details/DetailDialog.js";

export const EateryHTML = (itinPreviewObj) => {
  let eatHTML = `
      <section class="preview--eat">
            <div>
                ${
                  itinPreviewObj.eat.businessName
                    ? itinPreviewObj.eat.businessName
                    : "No restaurant selected."
                }
            </div>
      `;
  if (itinPreviewObj.eat.businessName) {
    eatHTML += detailsButton("eat", itinPreviewObj);
  }
  eatHTML += `</section>`;

  return eatHTML;
};

export const EatOption = (eatObject) => {
  return `<option value="${eatObject.businessName}">${eatObject.businessName}</option>`;
};
