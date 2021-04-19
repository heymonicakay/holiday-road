
let parksArray = []

export const useParks = () => [...parksArray]

export const getParks = () =>
  fetch(
    `https://developer.nps.gov/api/v1/parks?api_key=hqFcQBZOdKmyA7kliNAo2cikzMcEnuweR1JRxqnq`
  )
    .then((res) => res.json())
    .then((data) => (parksArray = data.data))
