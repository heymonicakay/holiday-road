// exports BizHTML()
export const BizHTML = (bizObj) => {
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
        return `<option value="${bizObject.name}">${bizObject.name}</option>`
}