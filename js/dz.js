const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let index of this.potions) {
      if (index.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let index of this.potions) {
      if (index.name === potionName) {
        let potionIndex = this.potions.indexOf(index);
        this.potions.splice(potionIndex, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let index of this.potions) {
      if (index.name === oldName) {
        index.name = newName;
        return `Potion ${oldName} is not in inventory!`;
      }
    }
  },
  // Change code above this line
};
