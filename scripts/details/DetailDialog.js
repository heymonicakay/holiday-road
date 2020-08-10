import { useBiz } from "../bizarries/BizProvider.js";
import { useEatery } from "../eateries/EateryProvider.js";
import { usePark } from "../parks/ParkProvider.js";

const eventHub = document.querySelector(".main")

// event listener to hear "parkDetailsClicked"
eventHub.addEventListener("parkDetailsClicked", clickEvent => {

    const contentTarget = document.querySelector (".dialog-box--park")   
    const parkName = clickEvent.detail.parkChosen
    const allPark = usePark()

    const targetPark = allPark.find(
        (park) => park.fullName === parkName)
             
    const htmlRepresentation = 
          `
            <section class="biz--details">
            <h3>${targetPark.fullName}</h3>
            <div><b>Description:</b> ${targetPark.description}</div>
            <div><b>States:</b> ${targetPark.states}</div>
            </section>
        `
        
    contentTarget.innerHTML = htmlRepresentation
    
    // show dialog box
    contentTarget.showModal()
})

//export bizDialog() to add to ItinList.js innerHTML
export const parkDialog = () => {
    return `
    <dialog class="dialog-box--park"></dialog>
    `
}


// event listener to hear "bizDetailsClicked"
eventHub.addEventListener("bizDetailsClicked", clickEvent => {

      const contentTarget = document.querySelector (".dialog-box--biz")   
      const bizName = clickEvent.detail.bizChosen
      const allBiz = useBiz()
  
      const targetBiz = allBiz.find(
          (biz) => biz.name === bizName)
               
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


// event listener to hear "eatDetailsClicked"
eventHub.addEventListener("eatDetailsClicked", clickEvent => {

    const contentTarget = document.querySelector (".dialog-box--eat")   
    const eatName = clickEvent.detail.eatChosen
    const allEat = useEatery()

    const targetEat = allEat.find(
        (eat) => eat.businessName === eatName)
             
    const htmlRepresentation = 
          `
            <section class="biz--details">
            <h3>${targetEat.businessName}</h3>
            <div><b>Location:</b> ${targetEat.city}, ${targetEat.state}</div>
            <div><b>Description:</b> ${targetEat.description}</div>
            <div><b>Souvenirs:</b> ${targetEat.ameneties.restrooms}</div>
            <div><b>Restrooms:</b> ${targetEat.ameneties.petFriendly}</div>
            <div><b>Restrooms:</b> ${targetEat.ameneties.wheelchairAccessible}</div>
            </section>
        `
        
    contentTarget.innerHTML = htmlRepresentation
    
    // show dialog box
    contentTarget.showModal()
})

//export bizDialog() to add to ItinList.js innerHTML
export const eatDialog = () => {
    return `
    <dialog class="dialog-box--eat"></dialog>
    `
}



  
