import { useBizAttractions } from "../bizarries/BizProvider.js";
import { useEateries } from "../eateries/EateryProvider.js";
import { useParks } from "../parks/ParkProvider.js";
import { ParkDetails } from "./ParkDetails.js"
import { BizDetails } from "./BizDetails.js"
import { EatDetails } from "./EatDetails.js"

const eventHub = document.querySelector(".main")

const contentTarget = document.querySelector (".dialog-box--park")


export const detailsButton = (type, itinPreviewObj) => {
  let button = ``;
  switch (type) {
    case "park":
      button = `<button
                class="button--details-park"
                 id="details--park--${itinPreviewObj.park.fullName}">
                    Details
                </button>`;
      break;

    case "eat":
      button = `<button
                class="button--details-eat"
                id="details--eat--${itinPreviewObj.eat.businessName}">
                    Details
                </button>`;
      break;

    case "biz":
      button = `<button
                class="button--details-biz"
                id="details--biz--${itinPreviewObj.park.name}">
                    Details
                </button>`;
      break;
  }
  return button;
};

// const toggleDetails = () => {

//     contentTarget.showModal()
// }
// const allPark = useParks()

// const park = allPark.find(p => p.fullName === nameOfPark)

// contentTarget.innerHTML = ParkDetails(park)


// contentTarget.addEventListener("click", e => {
//     if(e.target.id.startsWith("close--")) {
//         contentTarget.close()
//     }
// })




// eventHub.addEventListener("bizDetailsClicked", clickEvent => {

    // const contentTarget = document.querySelector (".dialog-box--biz")
    // const nameOfBiz = clickEvent.detail.bizChosen
    // const allBiz = useBizAttractions();
    // const biz = allBiz.find(b => b.name === nameOfBiz)

    // contentTarget.innerHTML = BizDetails(biz)
    // contentTarget.showModal()
    // contentTarget.addEventListener("click", clickEvent => {
    //     if(clickEvent.target.id.startsWith("close--")) {
    //         contentTarget.close()
    //     }
    // })
//   })


// eventHub.addEventListener("click", e => {
//     // const element = e.target

//     // const contentTarget = document.querySelector (".dialog-box--eat")
//     // const allEat = useEateries()

//     // const eat = allEat.find(e => e.businessName === nameOfEat)

//     // contentTarget.innerHTML = EatDetails(eat)

//     // contentTarget.showModal()

//     // contentTarget.addEventListener("click", e => {
//     //     if(element.id.startsWith("close--")) {
//     //         contentTarget.close()
//     //     }
//     // })
// })

export const dialog = (type) => {
    return `
    <dialog class="dialog-box--${type}"></dialog>
    `
}
