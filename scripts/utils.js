export const getDayOfTheWeek = (w) => {
    const date = new Date(w.dt * 1000);
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const day = date.getDay()

    return week[day]
}

export const zero = (qs) => {
    document.querySelector(`#${qs}Select`).value = "0"
}

export const clear = (qs) => {
    document.querySelector(`.container--${qs}`).innerHTML = ''
}