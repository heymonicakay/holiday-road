import { useBiz } from "../bizarries/BizProvider.js";
// import usePark here
// import useBiz here

const eventhHub = document.querySelector(".main")

// event listener to hear "bizDetailsClicked"
eventHub.addEventListener("bizDetailsClicked", (clickEvent) => {

      const contentTarget = document.querySelector (".dialog-box--biz")   
      const bizId = clickEvent.detail.criminalChosen
      const allBiz = useBiz()
  
      const targetBiz = allBiz.find(
          (biz) => biz.id === parseInt(bizId))
      
      const htmlRepresentation = targetBiz.map(associate => {
          return `
              <section class="biz--details">
              <div><b>Associate:</b> ${associate.name}</div>
              <div><b>Alibi:</b> ${associate.alibi}</div>
              </section>
          `
          }).join("")
          
  
      contentTarget.innerHTML = htmlRepresentation
      
      // show dialog box
      contentTarget.showModal()
  })
  
   
  //export alibiDialog() to add to CriminalList.js innerHTML
  export const bizDialog = () => {
      return `
      <dialog class="dialog-box--biz"></dialog>
      `
  }
  









// Responsiblity - Create and export a function which generates an HTML representation of a single detailsObject, to be rendered to the DOM as a pop-up message.
// imports useParks, useEats, useBiz
// exports - none (entire module will be imported to main.js)
/* listens for 'custom event' - 'detailsButtonClicked'
      conditions - if 
**/
// invokes showDetails function, passing in the matching