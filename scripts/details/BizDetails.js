export const BizDetails = ( biz ) => {
    const html =
    `
        <section class="biz--details">
        <h3>${biz.name}</h3>
        <div><b>Location:</b> ${biz.city}, ${biz.state}</div>
        <div><b>Description:</b> ${biz.description}</div>
        <div><b>Souvenirs:</b> ${biz.ameneties.souvenirs}</div>
        <div><b>Restrooms:</b> ${biz.ameneties.restrooms}</div>
        <button id="close--biz-details">Close</button>
        </section>
    `
    return html
}