// exports BizHTML()
export const BizHTML = (bizObj) => {
      return `
      <section class="preview--biz">
      <div><b>Attraction: </b>${bizObj}</div>
      <button class="button--details-biz" id="button__biz--${bizObj}">Attraction Details</button>
      </section>
      `
}


const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev")

// event listener -- dispatch "DetailsClicked"; use .split() method to get chosenName from button id
contentTarget.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("button__biz--")) {
          const [prompt, chosenName] = clickEvent.target.id.split("--")
          
          const customEvent = new CustomEvent ("bizDetailsClicked", {
              detail: {
                  bizChosen: chosenName
              }
          })
          eventHub.dispatchEvent(customEvent)
          
          // console.log checkpoint -- select an option, then click on "Details" button in Itinerary Preview to confirm in the console...
          console.log(`"bizDetailsClicked" dispatched...`, customEvent)
      }
  })





// Responsiblity - Create and export a function which generates an HTML representation of a single bizarrie object, and it's relevant key values, to be rendered to the preview content target
