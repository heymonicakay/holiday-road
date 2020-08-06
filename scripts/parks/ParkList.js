// imports useParks() and getParks() and ParkHTML()
import { getPark, usePark } from "./ParkProvider.js";
// generates HTML list of all individual ParkHTML() components

// exports ParksList() which renders the park list to the DOM

// listens for browser generated "click" event at target with class name "button"

//



eventHub.addEventListener("click", (btnClickedEvent) => {

      if(btnClickedEvent.target.classList.contains("btn--nat-park")) {

            const parkDeetsClickEvent = new CustomEvent("parkDeetsBtnClicked", {
            })
            eventHub.dispatchEvent(parkDeetsClickEvent)
      }
      else {
            return false
      };
})