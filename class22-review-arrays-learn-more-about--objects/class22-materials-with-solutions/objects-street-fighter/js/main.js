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
=================================================================================

/*OTHER SOLUTION:-*/
function MakeSFCharacter(punch,kick,catchPhrase,specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    
    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`)
    }
    this.winning = function(){
        console.log(`Haha! ${this.catchPhrase}`)
    }
    this.dash = function(){
        console.log('Whoopp, missed me!')
    }
}
let ryu = new MakeSFCharacter('high','high','Get OVER HERE','HADDDDUUUUKKKEEEEENNNNN')