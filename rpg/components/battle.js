let hpCheck = () => {
    console.log(`${player.name} HP: ${player.curHP} \n${chosenEnemy.name} HP: ${chosenEnemy.curHP}`);
}
let leastEffectiveShield = 0;
let mostEffectiveShield = 0;
let shieldIsDefensive = (selector, effectiveShield) => {
    if (shields[selector].type == chosenEnemy.weakness && effectiveShield == mostEffectiveShield) {
        mostEffectiveShield = 5;
    } else if (shields[selector].type == chosenEnemy.strength && effectiveShield == leastEffectiveShield) {
        leastEffectiveShield = 5;
    }
}
let leastEffectiveWeapon = 0;
let mostEffectiveWeapon = 0;
let equipIsEffective = (selector, effectiveWeapon) => {
    if (weapons[selector].type == chosenEnemy.weakness && effectiveWeapon == mostEffectiveWeapon) {
        mostEffectiveWeapon = 5;
    } else if (weapons[selector].type == chosenEnemy.strength && effectiveWeapon == leastEffectiveWeapon) {
        leastEffectiveWeapon = 5;
    }
}
let effectiveAtk = 0;
let atkIsAffective = (selector) => {
    effectiveAtk = 0;
    if (playerAttacks[selector].type == chosenEnemy.weakness) {
        effectiveAtk = 5;
    }
}
let calculatePlayerDmg = (selector) => {
    atkIsAffective(selector);
    equipIsEffective(selector,mostEffectiveWeapon);
    equipIsEffective(selector,leastEffectiveWeapon);
    return ((Math.floor(Math.random() * player.dmg)) * playerAttacks[selector].dmg) + mostEffectiveWeapon - leastEffectiveWeapon + effectiveAtk;
}
let calculateEnemyDmg = (selector) => {
    shieldIsDefensive(selector, leastEffectiveShield);
    shieldIsDefensive(selector, mostEffectiveShield);
    return Math.floor(Math.random() * chosenEnemy.dmg) + leastEffectiveShield - mostEffectiveShield;
}

exports.hpCheck = hpCheck;
exports.calculatePlayerDmg = calculatePlayerDmg;
exports.calculateEnemyDmg = calculateEnemyDmg;