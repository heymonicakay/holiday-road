export const itineraryHTML = (itinObj) => {
    return `
          <section class="itin-card">
                <div class="itin-card--park">Park: ${ itinObj.park }</div>
                <div class="itin-card--biz">Attraction: ${ itinObj.bizarrie }</div>
                <div class="itin-card--eat">Restaurant: ${ itinObj.eatery }</div>
                <div class="itin-card--date">Date Created: ${ new Date(itinObj.timestamp).toLocaleDateString('en-US') }
          </section>
    `
}