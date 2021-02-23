let bizarries = []

export const useBiz = () => bizarries.slice()

export const getBiz = () => fetch("http://holidayroad.nss.team/bizarreries")
    .then(res => res.json())
    .then(data => bizarries = data)

