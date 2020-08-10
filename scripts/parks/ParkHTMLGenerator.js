export const ParkHTML = (parkObj) => {
      return `
      <section class="preview--park">
                  <div>${parkObj.fullName}</div>
                  <button class="button--details-park" id="button__park--${parkObj.id}">Park Details</button>
            </section>
      `
}