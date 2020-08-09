// exports BizHTML()
export const BizHTML = (bizObj) => {
      return `
      <section class="preview--biz">
      <div>${bizObj.name}</div>
      <button class="button--details-biz" id="button__biz--${bizObj.id}">Attraction Details</button>
      </section>
      `
}


const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev")

// event listener -- dispatch "bizDetailsClicked"; use .split() method to get bizId from button id
contentTarget.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("button__biz--")) {
          const [prompt, bizId] = clickEvent.target.id.split("--")
          
          const bizEvent = new CustomEvent ("bizDetailsClicked", {
              detail: {
                  bizChosen: bizId
              }
          })
          eventHub.dispatchEvent(bizEvent)
          
          // console.log checkpoint -- select a Bizarre Destination, then click on "Attraction Details" button in Itinerary Preview to confirm in the console...
          console.log(`"bizDetailsClicked" dispatched...`, bizEvent)
      }
  })





// Responsiblity - Create and export a function which generates an HTML representation of a single bizarrie object, and it's relevant key values, to be rendered to the preview content target
