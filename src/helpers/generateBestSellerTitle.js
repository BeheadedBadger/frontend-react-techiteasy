import {bestSellingTv} from "/src/constants/inventory.js";

function title() {
    return bestSellingTv.brand + " " + bestSellingTv.type + " - " + bestSellingTv.name;
}

export default title;