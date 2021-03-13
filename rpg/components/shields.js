let shieldsClass = require("./class")

const basicShield = new shieldsClass.shield("Basic Shield", "metal", 0, false, false);
const woodShield = new shieldsClass.shield("Wooden Shield", "wood", "0", false, false);
const forceShield = new shieldsClass.shield("Force Shield", "magic", "0", false, false);

const shields = [basicShield, woodShield, forceShield];

let findPlayerShield = () => player.equipShield = (shields.filter(shield => shield.equip === true))[0].name;

exports.shields = shields;
exports.findPlayerShield = findPlayerShield;