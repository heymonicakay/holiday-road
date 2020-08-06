
import { getBiz, useBiz } from "./BizProvider.js";
import { BizHTML } from "./BizHTMLGenerator.js";

const contentTarget = document.querySelector(".container--biz")
const eventHub = document.querySelector(".main")

eventHub.addEventListener("bizSelected", event => {

    const bizThatWasSelected = event.detail.bizId
    const allBiz = useBiz()
    const foundBiz = allBiz.find(bizObj => {
        return bizObj.id === (parseInt(bizThatWasSelected))
    })
    console.log(foundBiz)
    render(foundBiz)
})


const render = foundBiz => {

    contentTarget.innerHTML = `
        <article>
           ${BizHTML(foundBiz)}
        </article>
    `
}


export const BizList = () => {
    getBiz()
    .then(() => {
        const biz = useBiz()
        render(biz)
    })
}
