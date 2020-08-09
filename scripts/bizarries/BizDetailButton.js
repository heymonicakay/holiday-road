
const eventHub = document.querySelector(".main")
const contentTarget = document.querySelector(".container--iten-prev)


// event listener -- dispatch "bizDetailsClicked"; use .split() method to get bizId from button id
contentTarget.addEventListener("click", (clickEvent) => {
      if (clickEvent.target.id.startsWith("button--biz__")) {
          const [prompt, bizId] = clickEvent.target.id.split("__")
          
          const bizEvent = new CustomEvent ("bizDetailsClicked", {
              detail: {
                  bizChosen: bizId
              }
          })
          eventHub.dispatchEvent(bizEvent)
          
          // console.log checkpoint -- click on "Attraction Details" button to confirm in the console...
          console.log(`"bizDetailsClicked" message dispatched...`, bizEvent)
      }
  })




// Note: responsibility of this module is to mange the bizarre destination details button 