// exports EatHTML() 

export const EateryHTML = (eatObj) => {
      return `
            <section class="preview--eat">
                  <div><b>Restaurant: </b>${eatObj}</div>
                  <button class="button--details-eat" id="button__eat--${eatObj}">Food Details</button>
            </section>
      `
}


const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev")

// event listener -- dispatch "DetailsClicked"; use .split() method to get chosenName from button id
contentTarget.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("button__eat--")) {
          const [prompt, chosenName] = clickEvent.target.id.split("--")
          
          const customEvent = new CustomEvent ("eatDetailsClicked", {
              detail: {
                  eatChosen: chosenName
              }
          })
          eventHub.dispatchEvent(customEvent)
          
          // console.log checkpoint -- select an option, then click on "Details" button in Itinerary Preview to confirm in the console...
          console.log(`"eatDetailsClicked" dispatched...`, customEvent)
      }
  })