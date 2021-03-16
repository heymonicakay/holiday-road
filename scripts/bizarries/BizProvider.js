let bizarries = []

export const useBiz = () => {
    // returns copy of the data (array)
    return [...bizarries]
}
export const getBiz = () => fetch("http://holidayroad.nss.team/bizarreries")
// makes GET request to biz api
// ... wait for requested data to be returned
// then parse it into JSON
    .then(res => res.json())
    // wait for parsed JSON to be returned
    // then store data in bizarries array
    .then(data => bizarries = data)

