import { ParkHTML } from "../parks/ParkHTMLGenerator.js"
import { EateryHTML } from "../eateries/EateryHTMLGenerator.js";
import { BizHTML } from "../bizarries/BizHTMLGenerator.js";


export const itineraryHTML = (itinObj) => {
    return `
          <section class="itin-card">
                <div class="itin-card--park">Park: ${ itinObj.park.fullName }</div>
                <div class="itin-card--biz">Attraction: ${ itinObj.bizarrie.name }</div>
                <div class="itin-card--eat">Restaurant: ${ itinObj.eatery.businessName }</div>
                <div class="itin-card--date">Date Created: ${ new Date(itinObj.timestamp).toLocaleDateString('en-US') }
          </section>
    `
}

export const itineraryPreviewHTML = (itinPreviewObj) => {

    const preview = document.querySelector(".itin-prev-contain");

    preview.innerHTML = `
    <article class="container--nat-park">
        ${ParkHTML(itinPreviewObj)}
    </article>
    <article class="container--biz">
        ${BizHTML(itinPreviewObj)}
    </article>
    <article class="container--eatery">
        ${EateryHTML(itinPreviewObj)}
    </article>
    `;
}