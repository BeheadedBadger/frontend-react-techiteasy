import {inventory} from "/src/constants/inventory.js";

function sold() {

    let totalSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalSold = totalSold + inventory[i].sold;
    }

    return totalSold;
}

export default sold;