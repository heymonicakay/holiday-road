export const itineraryHTML = (itenObj) => {
    console.log(itenObj)
    return `
    <br>
    <fieldset>
          <section>
                <div>${itenObj.eatery}</div>
                <div>${itenObj.park}</div>
                <div>${itenObj.bizarrie}</div>
          </section>
      </fieldset>
      <br>
    `
}