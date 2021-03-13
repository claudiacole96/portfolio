let weaponClass = require("./class");

const sword = new weaponClass.weapon("Sword", "metal", "0", false, false);
const bowAndArrow = new weaponClass.weapon("Bow and Arrow", "wood", "0", false, false);
const wand = new weaponClass.weapon("Wand", "magic", "0", false, false);

const weapons = [sword, bowAndArrow, wand];

let findPlayerWeapon = () => player.equipWeapon = (weapons.filter(weapon => weapon.equip === true))[0].name;

exports.weapons = weapons;
exports.findPlayerWeapon = findPlayerWeapon;