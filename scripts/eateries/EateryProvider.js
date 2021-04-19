let eateriesArray = [];

export const useEateries = () => [...eateriesArray]

export const getEateries = () => {
      return fetch("https://holiday-road-api.herokuapp.com/eateries")
        .then((res) => res.json())
        .then((data) => {
          eateriesArray = data
        })
}

