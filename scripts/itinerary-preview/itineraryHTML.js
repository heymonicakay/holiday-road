export const itineraryHTML = (itenObj) => {
    console.log(itenObj)
    return `
    <br>
    <fieldset>
          <section>
                <div><b>Park: </b>${itenObj.park}</div>
                <div><b>Attraction: </b>${itenObj.bizarrie}</div>
                <div><b>Restaurant: </b>${itenObj.eatery}</div>
          </section>
      </fieldset>
      <br>
    `
}