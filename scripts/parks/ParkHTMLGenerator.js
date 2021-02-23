export const ParkHTML = (parkObj) => {
      return `
      <section class="preview--park">
                  <div><b>Park: </b>${parkObj}</div>
                  <button class="button--details-park" id="details--park--${parkObj}">Details</button>
            </section>
      `
}