let eatery = [] 
      

export const useEatery = () => eatery.slice()
      

export const getEatery = () => {
      return fetch("http://holidayroad.nss.team/eateries")
            .then(response => response.json())
            .then(parsedData => {
                  eatery = parsedData
            })
}
   
