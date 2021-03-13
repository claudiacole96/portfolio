let itemChoice = (i) => {
    if (items[i].qnt > 0) {
        return `${items[i].name} Qnt: ${items[i].qnt}`;
    } else {
        return "unavailable";
    }
}
let rareItemChoice = (i) => {
    if (rareItems[i].own == true) {
        return `${rareItems[i].name}`;
    } else {
        return "unavailable";
    }
}
let weaponChoice = (i) => {
    if (weapons[i].own == true) {
        return weapons[i].name;
    } else {
        return "unavailable";
    }
}
let shieldChoice = (i) => {
    if (shields[i].own == true) {
        return shields[i].name;
    } else {
        return "unavailable";
    }
}
let changeEquip = (array, selector) => {
    array.map(i => { if (i.equip == true) { i.equip = false }});
    array[selector].equip = true;
    return array[selector].name;
}
let equipChoice = (arr) => {
    if (arr == weapons) {
        //fix below
        chooseWeapon = (readline.keyIn(`You have walked upon a ${chosenEnemy.name}! Choose your weapons wisely. Choose wrong and your weapons won't be as affective in battle. \n1) ${weaponChoice(0)}\n2) ${weaponChoice(1)}\n3) ${weaponChoice(2)}\n`, {limit: "$<1-3>"})) - 1;
        if (weaponChoice(chooseWeapon) == "unavailable" || chooseWeapon >= 3) {
            //fix below
            console.log("Please Try Again");
            equipChoice(weapons);
        } else {
            player.equipWeapon = changeEquip(weapons, chooseWeapon);
        }
    } else if (arr == shields) {
        //fix below
        chooseShield = (readline.keyIn(`Now choose your Shield. \n1) ${shieldChoice(0)} \n2) ${shieldChoice(1)} \n3) ${shieldChoice(2)} \n`, {limit: "$<1-3>"})) - 1;
        if (shieldChoice(chooseShield) == "unavailable" || chooseShield >= 3) {
            //fix below
            console.log("Please Try Again");
            equipChoice(shields);
        } else {
            player.equipShield = changeEquip(shields, chooseShield);
        }
    }
}

exports.equipChoice = equipChoice;
exports.rareItemChoice = rareItemChoice;
exports.itemChoice = itemChoice;