let itineraries = []

export const useItinerary = () => {
      return itineraries    
  }
  
  export const getItinerary = () => {

  return fetch("http://localhost:8087/itineraries")
        .then(response => response.json()) 
        .then(retrievedIten => {
           itineraries = retrievedIten
        })
    }