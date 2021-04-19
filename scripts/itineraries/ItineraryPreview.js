
import { qs } from "../utils.js"

const previewSection = qs(".container--iten-prev")

export const itinPreview = {
  park: {},
  eat: {},
  biz: {},
  save: {
    disabled: true,
  },
};

previewSection.addEventListener("click", e => {

    const element = e.target

    if(element.id.startsWith("details--")) {

        const [_, type, detail] = element.id.split("--")

        switch (detail) {
            case "eat":

        break;

            case "biz":

        break;
            case "park":
                const parkValue = qs("#parkSelect").value;
        break;
        }
    }
})