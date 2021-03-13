let rareLootDrop = () => {
    availArr = [];
    availArr = rareItems.filter(i => i.own == false);
    if (availArr.length == 0) {
        randomlootDrop();
    } else {
        x = Math.floor(Math.random() * availArr.length);
        for (i=0;i<rareItems.length;i++) {
            if (availArr[x].name == rareItems[i].name) {
                rareItems[i].own = true;
                //fix below
                console.log(`The enemy has dropped loot! You have received ${rareItems[i].name}`);
            }
        }
    }
}
let randomlootDrop = () => {
    x = Math.random();
    if (x < .3) {
        rareLootDrop();
    } else {
        y = Math.floor(Math.random()*items.length);
        items[y].qnt = items[y].qnt + 1;
        playerItems.push(items[y]);
        //fix below
        console.log(`The enemy has dropped loot! You have received ${items[y].name}`);
    }
}

exports.randomlootDrop = randomlootDrop;