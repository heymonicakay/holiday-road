export const getDayOfTheWeek = (w) => {
    const date = new Date(w.dt * 1000);
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const day = date.getDay()

    return week[day]
}