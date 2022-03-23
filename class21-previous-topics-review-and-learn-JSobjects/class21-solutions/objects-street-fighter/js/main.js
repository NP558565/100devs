//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighterConstructor(fighterName, fighterHairColor, fighterWeapon){
  this.name = fighterName
  this.hair = fighterHairColor
  this.weapon = fighterWeapon
  this.specialMove = function specialMove(){
    console.log('specialMove')
  }
  this.kick = function kick(){
    console.log('kick')
  }
  this.jump = function jump(){
    console.log('jump')
  }
}

StreetFighterConstructor.prototype.dodge = true

const sailorMoon = new StreetFighterConstructor('Sailor Moon', 'Blonde', 'Moon Crystal')
const stevenUniverse = new StreetFighterConstructor('Steven', 'Brown', 'Rose Quarts')
