// generates HTML to display individual eatery object

// exports EatHTML() 

export const EatHTML = (eatObj) => {
      return `
            <section>
                  <div>${eatObj.businessName}</div>
            </section>
      `
}


/*
<span class="button button--deets button--${eatObject.SOME KIND OF IDENTIFYER TO INDICATE SPECIFIC PARK SELCTED}">
      Show More Info
</span>

**/