let bizarreAttractions = []

export const useBizAttractions = () => {
    // returns copy of the data (array)
    return [...bizarreAttractions];
}
export const getBizAttractions = () =>
  fetch("https://holiday-road-api.herokuapp.com/bizarries")
    // makes GET request to biz api
    // ... wait for requested data to be returned
    // then parse it into JSON
    .then((res) => res.json())
    // wait for parsed JSON to be returned
    // then store data in bizarries array
    .then((data) => (bizarreAttractions = data))

