let parks = []

export const usePark = () => parks.slice()

export const getPark = () => fetch("http://localhost:8088/data")
    .then(res => res.json())
    .then(data => parks = data)
