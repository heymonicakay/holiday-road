import { useBiz } from "../bizarries/BizProvider.js";
import { useEatery } from "../eateries/EateryProvider.js";
import { usePark } from "../parks/ParkProvider.js";
import { ParkDetails } from "./ParkDetails.js"
import { BizDetails } from "./BizDetails.js"
import { EatDetails } from "./EatDetails.js"

const eventHub = document.querySelector(".main")

eventHub.addEventListener("parkDetailsClicked", clickEvent => {

    const contentTarget = document.querySelector (".dialog-box--park")
    const nameOfPark = clickEvent.detail.parkChosen
    const allPark = usePark()

    const park = allPark.find(p => p.fullName === nameOfPark)

    contentTarget.innerHTML = ParkDetails(park)

    contentTarget.showModal()

    contentTarget.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("close--")) {
            contentTarget.close()
        }
    })
})

eventHub.addEventListener("bizDetailsClicked", clickEvent => {

    const contentTarget = document.querySelector (".dialog-box--biz")
    const nameOfBiz = clickEvent.detail.bizChosen
    const allBiz = useBiz()
    const biz = allBiz.find(b => b.name === nameOfBiz)

    contentTarget.innerHTML = BizDetails(biz)
    contentTarget.showModal()
    contentTarget.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("close--")) {
            contentTarget.close()
        }
    })
  })


eventHub.addEventListener("eatDetailsClicked", clickEvent => {

    const contentTarget = document.querySelector (".dialog-box--eat")
    const nameOfEat = clickEvent.detail.eatChosen
    const allEat = useEatery()

    const eat = allEat.find(e => e.businessName === nameOfEat)

    contentTarget.innerHTML = EatDetails(eat)

    contentTarget.showModal()

    contentTarget.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("close--")) {
            contentTarget.close()
        }
    })
})

export const dialog = (type) => {
    return `
    <dialog class="dialog-box--${type}"></dialog>
    `
}
