// generates HTML to display individual park object

// exports ParkHTML() 

export const ParkHTML = (parkObj) => {
      return `
            <section>
                  <div>${parkObj.name}</div>
            </section>
      `
}

/* Example of 'button' element to include in the HTML

<span class="btn btn--deets">
      Show More Info
</span>

**/
