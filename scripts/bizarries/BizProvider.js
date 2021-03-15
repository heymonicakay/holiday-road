let bizarries = []

export const useBiz = () => {
    let bizData = [...bizarries]
    return bizData;
}
export const getBiz = () => fetch("http://holidayroad.nss.team/bizarreries")
    .then(res => res.json())
    .then(data => bizarries = data)

