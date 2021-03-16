// exports BizHTML() and BizOptionHTML()


export const BizHTML = (bizObj) => {
    // returns HTML block for single biz object
    // displayed in itin preview section after selection
    return `
        <section class="preview--biz">
            <div><b>Attraction: </b>
            ${bizObj}
            </div>
            <button class="button--details-biz" id="details--biz--${bizObj}">
                Details
            </button>
        </section>
      `
}

export const BizOption = (bizObject) => {
  // returns HTML string for single biz object
  // displayed in dropdown menu for bizarre attractions
  return `<option value="${bizObject.name}">${bizObject.name}</option>`;
}