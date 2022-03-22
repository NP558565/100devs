//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter (hairColor, strength, attack, defense) {
    this.hairColor = hairColor,
    this.strength = strength,
    this.attack = attack,
    this.defense = defense,
    this.fightcry = function () {
        console.log("I fight!")
    }
    this.attackOpponent = function () {
        this.attackValue -= 10
        console.log(this.attackValue)
    }
    this.defenseOpponent = function () {
        this.defenseValue -= 10
        console.log(this.defenseValue)
    }
}
let figther1 = new StreetFighter("brown","100","10","10")
console.log(figther1)
console.log(figther1.attack)
