import { getPark, usePark } from "./ParkProvider.js";
import { ParkHTML } from "./ParkHTMLGenerator.js";

const contentTarget = document.querySelector(".nationalParks")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("parkSelected", event => {
    const parkThatWasSelected = event.detail.fullName
    const allPark = usePark()
    const foundPark = allPark.find(parkObj => {
        return parkObj.id === (parkThatWasSelected)
    })
    render(foundPark)
})


const render = foundPark => {

    contentTarget.innerHTML = `
        <article>
           ${ParkHTML(foundPark)}
        </article>
    `
}


export const ParkList = () => {
    getPark()
    .then(() => {
        const park = usePark()
        render(park)
    })
}
