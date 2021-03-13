class weapon {
    constructor(name, type, dmg, equip, own) {
        this.name = name
        this.type = type 
        this.dmg = dmg 
        this.equip = equip
        this.own = own 
    }
}

class shield {
    constructor(name, type, def, equip, own) {
        this.name = name
        this.type = type
        this.def = def
        this.equip = equip
        this.own = own
    }
}

class item {
    constructor(name, qnt, use) {
        this.name = name
        this.qnt = qnt
        this.use = use
    }
}

class rareItem extends item {
    constructor (name, qnt, use, own) {
        super(name, qnt, use)
        this.own = own
    }
}

class attack {
    constructor(name, type, level, dmg) {
        this.name = name
        this.type = type
        this.level = level
        this.dmg = dmg
    }
}

class enemy {
    constructor(name, weakness, strength, dmg, curHP, maxHP, xp, active, rare, msg) {
        this.name = name
        this.weakness = weakness
        this.strength = strength
        this.dmg = dmg
        this.curHP = curHP
        this.maxHP = maxHP
        this.xp = xp
        this.active = active
        this.rare = rare
        this.msg = msg
    }
}

exports.weapon = weapon;
exports.shield = shield;
exports.item = item
exports.rareItem = rareItem
exports.attack = attack
exports.enemy = enemy