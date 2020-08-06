let park = [] 

export const usePark = () => {
      return park.slice() 
}

export const getPark = () => {
      return fetch("http://localhost:8088/data")
            .then(response => response.json())
            .then(parsedData => {
                  park = parsedData
            })
}