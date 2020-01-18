function Fighter(fighterParams) {
  const { name, damage, hp: maxHP, strength, agility } = fighterParams;
  let won = 0; let lost = 0;
  let { hp } = fighterParams;

  class Fighter {
    getName() {
      return name;
    }
    getDamage() {
      return damage;
    }
    getStrength() {
      return strength;
    }
    getAgility() {
      return agility;
    }
    getHealth() {
      return hp;
    }

    attack(defender) {
      const success = (100 - (defender.getStrength() + defender.getAgility())) / 100;
      if (Math.random() < success) {
        defender.dealDamage(damage)
        console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    }

    logCombatHistory() {
      return `Name: ${name}, Wins: ${won}, Losses: ${lost}`
    }
    heal(heal) {
      hp = hp + heal > maxHP ? maxHP : hp + heal;
    }
    dealDamage(damage) {
      hp = hp - damage > 0 ? hp - damage : 0;
    }
    addWin() {
      won += 1;
    }
    addLoss() {
      lost += 1;
    }

  }

  return new Fighter();
}

const battle = (fighter1, fighter2) => {
  const iterCombat = (fighter1, fighter2) => {
    if (!fighter1.getHealth()) {
      console.log(`${fighter2.getName()} has won!`);
      fighter2.addWin()
      fighter1.addLoss()
      return;
    }
    fighter1.attack(fighter2);
    return iterCombat(fighter2, fighter1)
  }
  if (!fighter1.getHealth()) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
    return;
  }
  if (!fighter2.getHealth()) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
    return;
  }
  iterCombat(fighter1, fighter2);
}
