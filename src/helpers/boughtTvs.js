import {inventory} from "/src/constants/inventory.js";

function bought() {

    let totalBought = 0;

    for (let i = 0; i < inventory.length; i++) {
        totalBought = totalBought + inventory[i].originalStock;
    }

    return totalBought;
}

export default bought;