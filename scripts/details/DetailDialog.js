import { useBiz } from "../bizarries/BizProvider.js";
// import usePark here
// import useBiz here

const eventHub = document.querySelector(".main")

// event listener to hear "bizDetailsClicked"
eventHub.addEventListener("bizDetailsClicked", clickEvent => {

      const contentTarget = document.querySelector (".dialog-box--biz")   
      const bizId = clickEvent.detail.bizChosen
      const allBiz = useBiz()
  
      const targetBiz = allBiz.find(
          (biz) => biz.id === parseInt(bizId))
               
      const htmlRepresentation = 
            `
              <section class="biz--details">
              <h3>${targetBiz.name}</h3>
              <div><b>Location:</b> ${targetBiz.city}, ${targetBiz.state}</div>
              <div><b>Description:</b> ${targetBiz.description}</div>
              <div><b>Souvenirs:</b> ${targetBiz.ameneties.souvenirs}</div>
              <div><b>Restrooms:</b> ${targetBiz.ameneties.restrooms}</div>
              </section>
          `
          
      contentTarget.innerHTML = htmlRepresentation
      
      // show dialog box
      contentTarget.showModal()
  })
  
   
  //export bizDialog() to add to ItinList.js innerHTML
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