let eateriesArray = [];

export const useEateries = () => [...eateriesArray]

export const getEateries = () => {
      return fetch("http://holidayroad.nss.team/eateries")
            .then(res => res.json())
            .then(data => {
                  eateriesArray = data
            })
}

