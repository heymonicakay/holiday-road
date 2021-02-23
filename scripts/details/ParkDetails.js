export const ParkDetails = ( park ) => {
    const html =
    `
      <section class="park--details">
      <h3>${park.fullName}</h3>
      <div><b>Description:</b> ${park.description}</div>
      <div><b>States:</b> ${park.states}</div>
      <button id="close--park-details">Close</button>
      </section>
  `
    return html
}