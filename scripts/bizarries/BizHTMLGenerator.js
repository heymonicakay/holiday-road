// Responsiblity - Create and export a function which generates an HTML representation of a single bizarrie object, and it's relevant key values, to be rendered to the preview content target

// exports BizHTML()

export const BizHTML = (bizObj) => {
      return `
            <section>
                  <div>${bizObj.name}</div>
            </section>
      `
}

// listens for 'browser generated' event - 'click'

/* Example of 'button' element to include in the HTML

<span class="button button--deets button--${bizObject.id}">
Show More Info
</span>

**/
     

