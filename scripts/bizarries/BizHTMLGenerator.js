// Responsiblity - Create and export a function which generates an HTML representation of a single bizarrie object, and it's relevant key values, to be rendered to the preview content target

// exports BizHTML()
export const BizHTML = (bizObj) => {
      return `
            <section class="preview--biz">
            <div>${bizObj.name}</div>
            <button class="button--details-biz" id="button--biz__${bizObj.id}">Attraction Details</button>
            </section>
      `
}

// listens for 'browser generated' event - 'click'
     

