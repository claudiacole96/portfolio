let itemClass = require("./class");

const removeUsedItem = (item) => {
    for (i=0;i<playerItems.length;i++) {
        if (item.name == playerItems[i].name) {
            playerItems.splice(i, 1);
        }
    }
}

const miniBomb = new itemClass.item("A Mini Bomb", 0, () => {
    if (miniBomb.qnt > 0) {
        chosenEnemy.curHP = chosenEnemy.curHP - (10 * player.level);
        miniBomb.qnt = miniBomb.qnt -1;
        removeUsedItem(miniBomb);
        // fix below
        console.log("item has been used");
    } else {
        // fix below
        console.log("you do not have this item");
    }
})

const fruit = new itemClass.item("Fruit", 0, () => {
    if (fruit.qnt > 0) {
        player.curHP = player.curHP + 10;
        if (player.curHP > player.maxHP) {
            player.curHP = player.maxHP;
        }
        fruit.qnt = fruit.qnt - 1;
        removeUsedItem(fruit);
        // fix below
        console.log("Item has been used.");
    } else {
        // fix below
        console.log("You do not have this item.")
    }
})

const meat = new itemClass.item("Meat", 0, () => {
    if (meat.qnt > 0) {
        player.curHP = player.curHP + (player.maxHP / 2);
        if (player.curHP > player.maxHP) {
            player.curHP = player.maxHP;
        }
        meat.qnt = meat.qnt - 1;
        removeUsedItem(fruit);
        // fix below
        console.log("Item has been used.");
    } else {
        // fix below
        console.log("You do not have this item.")
    }
})

const revivalStone = new itemClass.rareItem("A Revival Stone", 0, () => {
    if (revivalStone.own == true && player.curHP < 1) {
        player.curHP = (player.maxHP / 2);
        revivalStone.own = false;
        // fix below
        console.log("Item has been used.");
    } else {
        // fix below
        console.log("You do not own this item");
    }
}, false);

const hpStone = new itemClass.rareItem("An HP Stone", 0, () => {
    if (hpStone.own == true) {
        player.curHP = player.maxHP;
        hpStone.own = false;
        // fix below
        console.log("Item has been used.");
    } else {
        // fix below
        console.log("You do not own this item");
    }
}, false);

const bomb = new itemClass.rareItem("A Bomb", 0, () => {
    if (bomb.own == true) {
        chosenEnemy.curHP = chosenEnemy.curHP / 2;
        bomb.own = false;
        // fix below
        console.log("Item has been used.");
    } else {
        // fix below
        console.log("You do not own this item");
    }
}, false);

const items = [miniBomb, fruit, meat];
const rareItems = [revivalStone, hpStone, bomb]

//item functions

let getInventoryOfItems = () => {
    arr = [];
    for (i = 0; i < playerItems.length; i++) {
        arr.push(playerItems[i].name);
    }
    itemInventory = arr;
    itemInventory = itemInventory.sort();
}
let getInventoryOfRareItems = () => {
    arr = [];
    for (i = 0; i < rareItems.length; i++) {
        if (rareItems[i].own == true) {
            arr.push(rareItems[i].name);
        }
    }
    rareItemInventory = arr;
    rareItemInventory = rareItemInventory.sort();
}

exports.items = items;
exports.rareItems = rareItems;
exports.getInventoryOfItems = getInventoryOfItems;
exports.getInventoryOfRareItems = getInventoryOfRareItems;
exports.revivalStone = revivalStone;