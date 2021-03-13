let enemyClass = require("./class");

const spider = new enemyClass.enemy("A Spider", "dive", "none", 8, 30, 30, 25, false, false, `"Tk Tk Tk Tk"`);
const bats = new enemyClass.enemy("Bats", "spin", "none", 8, 30, 30, 25, false, false, `"Screeeeeeeee!"`);
const babyDragon = new enemyClass.enemy("A Baby Dragon", "basic", "none", 10, 40, 40, 50, false, true, `"Rawr!!!"`);
const goblin = new enemyClass.enemy("A Goblin", "basic", "none", 13, 50, 50, 25, false, false, `"What is that smell?! A human!"`);
const troll = new enemyClass.enemy("A Troll", "basic", "none", 13, 50, 50, 25, false, false, `"Who dares cross my path?! You will pay!"`);
const ogre = new enemyClass.enemy("A Ogre", "basic", "none", 15, 60, 60, 50, false, true, `"Whooo's there?! Dinner!"`);
const wolf = new enemyClass.enemy("A Wolf", "dive", "none", 18, 70, 70, 25, false, false, `"Grrrrrrrrrrrrr"`);
const bigSpider = new enemyClass.enemy("A Giant Spider", "basic", "none", 18, 70, 70, 25, false, false, `"THUMP THUMP THUMP"`);
const drider = new enemyClass.enemy("A Drider", "basic", "none", 20, 80, 80, 50, false, true, `"Well well.... you won't be leaving here alive young adventurer."`);
const vampire = new enemyClass.enemy("A Vampire", "wood", "none", 23, 90, 90, 25, false, false, `"Oh? I smell blood!"`);
const snake = new enemyClass.enemy("A Snake", "none", "wood", 23, 90, 90, 25, false, false, `"Ssssssso, dinner hassss jusssst walked in!"`);
const fury = new enemyClass.enemy("A Fury", "metal", "none", 25, 100, 100, 50, false, true, `"Kawwwwwwwww!"`);
const redDragon = new enemyClass.enemy("A Red Dragon", "none", "wood", 28, 100, 100, 0, false, false, `"Who dares enter my cave??"`);
const blueDragon = new enemyClass.enemy("A Blue Dragon", "magic", "none", 28, 100, 100, 0, false, false, `"Who dares enter my cave??"`);
const goldDragon = new enemyClass.enemy("A Gold Dragon", "none", "metal", 30, 150, 150, 0, false, true, `"Who dares enter my cave??"`);

const enemies = [spider, bats, babyDragon, goblin, troll, ogre, wolf, bigSpider, drider, vampire, snake, fury, redDragon, blueDragon, goldDragon];

let chosenEnemy = {};
let randomEnemy = () => {
    x = Math.random();
    y = (3*(player.level - 1))
    if (x < .2) {
        enemies[i = 2 + y].active = true;
    } else {
        enemies[i = (Math.floor(Math.random()*2)) + y].active = true;
    }
    chosenEnemy = enemies[i];
}

exports.enemies = enemies;
exports.chosenEnemy = chosenEnemy;
exports.randomEnemy = randomEnemy;