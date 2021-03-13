//upgrade weapon/shields
let randomPick = arr => {
    newArr = arr.filter(i => i.own == true);
    if (newArr.length < 3) {
        availArr = [];
        availArr = arr.filter(i => i.own == false);
        x = Math.floor(Math.random() * availArr.length);
        for (i=0;i<arr.length;i++) {
            if (availArr[x].name == arr[i].name) {
                arr[i].own = true;
                if (arr == weapons) {
                    playerWeapons.push(arr[i].name);
                } else if (arr == shields) {
                    playerShields.push(arr[i].name);
                }
                // fix below
                console.log(`You received a ${arr[i].name}!`);
            }
        }
    } else {
        // fix below
        console.log("Your choice has maxed out, please choose again.");
        chooseLoot();
    }
}
let chooseLoot = () => {
    // fix below
    x = readline.keyIn(`Pick your level up loot! \n1) Weapon \n2) Shield \n`, {limit: "$<1-2>"});
    if (x == 1) {
        randomPick(weapons);
    } else if (x == 2) {
        randomPick(shields);
    } else {
        // fix below
        console.log("Please try again");
        chooseLoot();
    }
}

//attack upgrades
let playerAttackDmgCheck = selector => {
    if (playerAttacks[selector].level < 3) {
        return playerAttacks[selector].name;
    } else {
        return `${playerAttacks[selector].name} is maxed out`;
    }
}
let upgradeAttacks = () => {
    // fix below
    x = readline.keyIn(`Please choose which attack you which to upgrade: \n1) ${playerAttackDmgCheck(0)} \n2) ${playerAttackDmgCheck(1)} \n3) ${playerAttackDmgCheck(2)} \n`, {limit: "$<1-3>"}) - 1;
    if (playerAttacks[x].level !== 3 && x < 3) {
        playerAttacks[x].level = playerAttacks[x].level + 1;
        playerAttacks[x].dmg = playerAttacks[x].dmg + 0.5
        // fix below
        console.log(`Your ${playerAttacks[x].name} multiplier has been upgraded to ${playerAttacks[x].dmg}.`);
    } else if (x < 3) {
        // fix below
        console.log("Sorry, that attack is already maxed out. Please try again:");
        upgradeAttacks()
    } else {
        // fix below
        console.log("Please try again");
        upgradeAttacks();
    }
}
const checkXpStatus = () => {
    if (player.curXP >= 1000 && player.level == 4 || player.curXP >= 500 && player.level == 3 || player.curXP >= 250 && player.level == 2 || player.curXP >= 100 && player.level == 1){
        player.level = player.level + 1;
        player.dmg = player.dmg +5;
        player.maxHP = player.maxHP + 10;
        // fix below
        console.log(`Congratulations! You have been promoted to Level ${player.level}.`);
        chooseLoot();
        upgradeAttacks();
    }
}

exports.checkXpStatus = checkXpStatus;