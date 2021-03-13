const readline = require("readline-sync");

let attackData = require("./components/attacks");
let battleData = require("./components/battle");
let battlePrepData = require("./components/battlePrep");
let enemyData = require("./components/enemies");
let itemData = require("./components/items");
let lootData = require("./components/loot");
let playerData = require("./components/player");
let shieldData = require("./components/shields");
let upgradeData = require("./components/upgrades");
let weaponData = require("./components/weapons");

let quitGame = false;
let dragonDefeat = false;

//gameplay

    //fix below
console.log("\nWell hello there young adventurer. Welcome to the land of Fizz!");

playerData.player.name = readline.question("\nI haven't seen you around here before, what's your name? \n");

    //fix below
console.log(`\nNice to meet you ${playerData.player.name}. My name is Octavia, and it is my duty to show you the ropes for the quest you're about to take.`);

    //fix below
const levelOneWeapon = (readline.keyIn(`\nSay, what weapon are you bringin' along your travels? \n1) ${weaponData.weapons[0].name} \n2) ${weaponData.weapons[1].name} \n3) ${weaponData.weapons[2].name} \n`, {limit: "$<1-3>"})) - 1;
weaponData.weapons[levelOneWeapon].own = true;
weaponData.weapons[levelOneWeapon].equip = true;
playerData.playerWeapons.push(weaponData.weapons[levelOneWeapon].name);
weaponData.findPlayerWeapon();

    //fix below
console.log(`\n${player.equipWeapon} you say? Sounds like you know what you're doing!`);

    //fix below
const levelOneShield = (readline.keyIn(`\nLet me gift you one of my shields for your adventure. Which one here would you like? \n1) ${shieldData.shields[0].name} \n2) ${shieldData.shields[1].name} \n3) ${shieldData.shields[2].name} \n`, {limit: "$<1-3>"})) - 1;
shieldData.shields[levelOneShield].own = true;
shieldData.shields[levelOneShield].equip = true;
playerData.playerShields.push(shieldData.shields[levelOneShield].name);
shieldData.findPlayerShield();

    //fix below
console.log(`\nNow that you have your ${playerData.player.equipWeapon} and ${playerData.player.equipShield}, let's get down to what you're here for.`);
console.log(`A giant beast has been raiding our land. It's become too dangerous of a problem to handle, so we called in the best.`);
console.log(`Your task is to venture your way through the Forbidden Field and up the mountain. \nYou will encounter many different kinds of creatures. \nDefeating these creatures will make you stronger.`);
console.log(`\nBut the reason this quest is so difficult, there's a mysterious energy from within the field, the stronger you get, the stronger your enemies will get.`);
console.log(`Keep note of what weapons do more damage when you fight, as well as which attacks you use in battle. Don't forget to use your items!`);
console.log(`\nWell, ${playerData.player.name}, I believe you are ready to defeat the beast at the top of the mountain! I wish you luck, young adventurer!`);

while (playerData.player.curHP > 0 && !dragonDefeat && !quitGame ) {
    //fix below
    let keyPress = readline.keyIn(`"w" walk, "s" print stats, "i" print inventory, "q" quit game \n`);
    let playerRun = false;
    //fix below
    if (keyPress == "w" || keyPress == "W") {
        x = Math.random();
        if (x < .3) {
            enemyData.randomEnemy();
            //fix below
            console.log(enemyData.chosenEnemy.msg);
            console.log(`You have encountered ${enemyData.chosenEnemy.name}. \nThey're weak against ${enemyData.chosenEnemy.weakness}, but strong against ${enemyData.chosenEnemy.strength}.`)
            battlePrepData.equipChoice(weapons);
            battlePrepData.equipChoice(shields);
            while (enemyData.chosenEnemy.curHP > 0 && playerData.player.curHP > 0 && quitGame == false) {
                battleData.hpCheck();
                //fix below
                atk = (readline.keyIn(`Attack, use item, or run: \n1) ${attackData.playerAttacks[0].name} \n2) ${attackData.playerAttacks[1].name} \n3) ${attackData.playerAttacks[2].name} \n4) Use Item \n5) Run \n6) Quit Game \n`, {limit: "$<1-6>"})) - 1;
                if (atk == 5) {
                    //fix below
                    check = readline.keyInYN("Are you sure you want to quit the game?  \n");
                    if (check) {
                        //fix below
                        console.log(`You have quit the game.`);
                        quitGame = true;
                    } else {
                        //fix below
                        console.log("You remained in the game");
                    }
                } else if (atk == 4) {
                    x = Math.random();
                    if (playerRun) {
                        //fix below
                        console.log("You have already tried to run away.");
                    } else if (x < .5) {
                        //fix below
                        console.log("You successfully ran away");
                        enemyData.chosenEnemy.curHP = 0;
                    } else {
                        //fix below
                        console.log("You did not run away");
                        playerRun = true;
                    }
                } else if (atk == 3) {
                    //fix below
                    useItem = (readline.keyIn(`Choose an item to use: \n1) ${battlePrepData.itemChoice(0)} \n2) ${battlePrepData.itemChoice(1)} \n3) ${battlePrepData.itemChoice(2)} \n4) Use Rare Item \n5) Go Back \n`, {limit: "$<1-5>"})) - 1;
                    if (useItem == 3) {
                        //fix below
                        useRareItem = (readline.keyIn(`Choose a Rare Item to use: \n1) ${battlePrepData.rareItemChoice(0)} \n2) ${battlePrepData.rareItemChoice(1)} \n3) ${battlePrepData.rareItemChoice(2)} \n4) Go Back`, {limit: "$<1-4>"})) - 1;
                        if (useRareItem < 3) {
                            itemData.rareItems[useRareItem].use();
                        }
                    } else if (useItem < 3) {
                        itemData.items[useItem].use();
                    }
                } else if (atk < 3) {
                    //fix below
                    console.log(`You attack ${enemyData.chosenEnemy.name} with ${attackData.playerAttacks[atk].name}`);
                    x = battleData.calculatePlayerDmg(atk);
                    //fix below
                    console.log(`You did ${x} damage!`);

                    enemyData.chosenEnemy.curHP = enemyData.chosenEnemy.curHP - x;
                    if (enemyData.chosenEnemy.curHP > 0) {
                        y = battleData.calculatedEnemyDmg(atk);
                        //fix below
                        console.log(`${enemyData.chosenEnemy.name} has hit you with ${y} damage!`);

                        playerData.player.curHP = playerData.player.curHP - y;
                    }
                }
            }
            if (playerData.player.curHP < 1 && itemData.revivalStone.own == true) {
                //fix below
                console.log(`You have died! But your Revival Stone has saved you!`);
                itemData.revivalStone.use();
            } else if (atk < 4) {
                if (playerData.player.level == 5) {
                    //fix below
                    console.log(`Congratulations! You have defeated the beast and won the game!`);
                    dragonDefeat = true;
                } else {
                    //fix below
                    console.log(`${player.name} defeated ${chosenEnemy.name}`);
                    player.enemyKills = player.enemyKills + 1;
                    player.curXP = player.curXP + chosenEnemy.xp;
                    //fix below
                    console.log(`You earned ${chosenEnemy.xp} XP.`);
                    if (chosenEnemy.rare == true) {
                        lootData.randomlootDrop();
                    }
                    lootData.randomlootDrop();
                    upgradeData.checkXpStatus();
                }
            }
            if (playerData.player.curHP > 0) {
                enemyData.chosenEnemy.curHP = enemyData.chosenEnemy.maxHP;
                playerData.player.curHP = playerData.player.maxHP;
            }

        } else {
            //fix below
            console.log("There are no enemies in sight.");
        }

    } else if (keyPress == "s" || keyPress == "S") {
        //fix below
        console.log(playerData.player);
    
    } else if (keyPress == "i" || keyPress == "I") {
        let itemInventory = [];
        let rareItemInventory = [];
        itemData.getInventoryOfItems();
        itemData.getInventoryOfRareItems();
        //fix below
        console.log(`Weapon Inventory: ${playerData.playerWeapons} \nShield Inventory: ${playerData.playerShields} \nItem Inventory: ${itemInventory} \nRare Item Inventory: ${rareItemInventory}`);

    } else if (keyPress == "q" || keyPress == "Q") {
        //fix below
        check = readline.keyInYN("Are you sure you want to quit the game?  \n");
        if (check == true) {
            //fix below
            console.log(`You have quit the game.`);
            playerData.player.curHP = 0;
        } else {
            //fix below
            console.log("You remained in the game");
        }

    } else {
        //fix below
        console.log("Please enter action key again");
    }
}
//fix below
console.log("The game has ended. \nThanks for playing!");