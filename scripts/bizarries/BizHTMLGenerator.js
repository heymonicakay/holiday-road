// exports BizHTML()
export const BizHTML = (bizObj) => {
        return `
        <section class="preview--biz">
            <div><b>Attraction: </b>
            ${bizObj}
            </div>
            <button class="button--details-biz" id="button__biz--${bizObj}">
                Details
            </button>
        </section>
      `
}

const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev")

contentTarget.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("button__biz--")) {
        const [_, chosenName] = clickEvent.target.id.split("--")

        const customEvent = new CustomEvent ("bizDetailsClicked", {
            detail: {
                bizChosen: chosenName
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

