// imports useParks() and getParks() and ParkHTML()

// generates HTML list of all individual ParkHTML() components

// exports ParksList() which renders the park list to the DOM

// listens for browser generated "click" event at target with class name "button"

//



eventHub.addEventListener("click", (buttonClickedEvent) => {

      if(buttonClickedEvent.target.classList.contains("button")) {
            let theLastClass = "";

            const buttonClassList = buttonClickedEvent.target.classList

            for (let i = 0; i < buttonClassList.length; i += 2) {
                  theLastClass += buttonClassList[i]
            }
            const [_, criminalId] = theLastClass.split("--");

            const criminalIdInt = parseInt(criminalId);

            const associateButtonEvent = new CustomEvent("theButtonWasClicked", {
                  detail: {
                        thisCriminalId: criminalIdInt
                  }
            })
            eventHub.dispatchEvent(associateButtonEvent)
      }
      else {
            return false
      };
})