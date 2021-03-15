let bizarries = []

export const useBiz = () => {
    let filledArray = [...bizarries]
    return filledArray
}
export const getBiz = () => fetch("http://holidayroad.nss.team/bizarreries")
    .then(res => res.json())
    .then(data => bizarries = data)

