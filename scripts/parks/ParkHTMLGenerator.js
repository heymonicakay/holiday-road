export const ParkHTML = (parkObj) => {
      return `
      <section class="preview--park">
                  <div><b>Park: </b>${parkObj}</div>
                  <button class="button--details-park" id="button__park--${parkObj}">Details</button>
            </section>
      `
}


const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev")

// event listener -- dispatch "DetailsClicked"; use .split() method to get chosenName from button id
contentTarget.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("button__park--")) {
          const [prompt, chosenName] = clickEvent.target.id.split("--")
          
          const customEvent = new CustomEvent ("parkDetailsClicked", {
              detail: {
                  parkChosen: chosenName
              }
          })
          eventHub.dispatchEvent(customEvent)
          
          // console.log checkpoint -- select an option, then click on "Details" button in Itinerary Preview to confirm in the console...
          console.log(`"parkDetailsClicked" dispatched...`, customEvent)
      }
  })