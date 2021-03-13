const player = {
    name: "",
    level: 1,
    maxHP: 50,
    curHP: 50,
    curXP: 0,
    dmg: 10,
    equipWeapon: "",
    equipShield: "",
    enemyKills: 0
}

let playerShields = [];
let playerWeapons = [];
let playerItems =[];

exports.player = player;
exports.playerShields = playerWeapons;
exports.playerWeapons = playerShields;
exports.playerItems = playerItems;