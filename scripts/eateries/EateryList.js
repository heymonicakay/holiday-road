
import { EateryHTML } from "./EateryHTMLGenerator.js";
import { useEatery, getEatery } from "./EateryProvider.js";

const contentTarget = document.querySelector(".eateriesSelect")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("eaterySelected", event => {

    const eateryThatWasSelected = event.detail.eateryId
    const allEateries = useEatery()
    const foundEatery = allEateries.find(eateryObj => {
        return eateryObj.id === (parseInt(eateryThatWasSelected))
    })
    console.log(foundEatery)
    render(foundEatery)
})


const render = foundEatery => {

    contentTarget.innerHTML = `
        <article>
           ${EateryHTML(foundEatery)}
        </article>
    `
}


export const EateryList = () => {
    getEatery()
    .then(() => {
        const eatery = useEatery()
        render(eatery)
    })
}
