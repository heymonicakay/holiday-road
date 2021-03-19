export const ParkDetails = ( parkObject ) => {
    const html =
    `
      <section class="park--details">
      <h3>${parkObject.fullName}</h3>
      <div><b>Description:</b> ${parkObject.description}</div>
      <div><b>States:</b> ${parkObject.states}</div>
      <button id="close--park-details">Close</button>
      </section>
  `
    return html
}