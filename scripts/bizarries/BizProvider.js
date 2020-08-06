let bizarries = [] 
      

export const useBiz = () => bizarries.slice(0, 51)

      

export const getBiz = () => {
      return fetch("http://holidayroad.nss.team/bizarreries")
            .then(response => response.json())
            .then(parsedData => {
                  bizarries = parsedData
            })
}
   

      