export const EatDetails = ( eat ) => {
    const html =
    `
        <section class="eat--details">
        <h3>${eat.businessName}</h3>
        <div><b>Location:</b> ${eat.city}, ${eat.state}</div>
        <div><b>Description:</b> ${eat.description}</div>
        <div><b>Restrooms:</b> ${eat.ameneties.restrooms}</div>
        <div><b>Pet Friendly:</b> ${eat.ameneties.petFriendly}</div>
        <div><b>Wheelchair Accessible:</b> ${eat.ameneties.wheelchairAccessible}</div>
        <button id="close--eat-details">Close</button>
        </section>
  `
    return html
}