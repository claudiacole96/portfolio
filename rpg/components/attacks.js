let attackClass = require("./class")

const basic = new attackClass.attack("Basic Attack", "basic", 1, 1);
const spin = new attackClass.attack("Spin Attack", "spin", 1, 1);
const dive = new attackClass.attack("Dive Attack", "dive", 1, 1);

const playerAttacks = [basic, spin, dive];

exports.playerAttacks = playerAttacks;