let park = [] 
      

export const usePark = () => park.slice()
      

export const getPark = () => {
      return fetch("https://developer.nps.gov/api/v1/activities/parks?&api_key=hqFcQBZOdKmyA7kliNAo2cikzMcEnuweR1JRxqnq")
            .then(response => response.json())
            .then(parsedData => {
                  park = parsedData
            })
}
   
