export const ParkHTML = (parkObj) => {
      return `
      <section class="preview--park">
                  <div>${parkObj}</div>
                  <button class="button--details-park" id="button__park--${parkObj.id}">Park Details</button>
            </section>
      `
}