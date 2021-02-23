export const EateryHTML = (eatObj) => {
    return `
        <section class="preview--eat">
                <div><b>Restaurant: </b>${eatObj}</div>
                <button class="button--details-eat" id="details--eat--${eatObj}">Details</button>
        </section>
    `
}
