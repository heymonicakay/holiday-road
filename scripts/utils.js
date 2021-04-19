
export const getDayOfTheWeek = (w) => {
    const date = new Date(w.dt * 1000);
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const day = date.getDay();

    return week[day];
};

export const qs = (selector) => {
    return document.querySelector(`${selector}`);
};

export const zero = (qs) => {
    document.querySelector(`#${qs}Select`).value = "0";
};

export const clear = (qs) => {
    document.querySelector(`.container--${qs}`).innerHTML = "";
};

export const enableSave = (previewObj, park, eat, biz) => {
    const saveButton = qs("#saveItinerary");
    if (park === "0" || eat === "0" || biz === "0") {
        previewObj.save.disabled = true;
        saveButton.disabled = true;
    } else {
        previewObj.save.disabled = false;
        saveButton.disabled = false
    }

};

export const findObj = (array, val) => {
    const found = array.find(obj => obj.name === val || obj.fullName === val || obj.businessName === val)
    return found
};