let eateries = []

export const useEatery = () => eateries.slice()

export const getEatery = () => {
      return fetch("http://holidayroad.nss.team/eateries")
            .then(res => res.json())
            .then(data => {
                  eateries = data
            })
}

