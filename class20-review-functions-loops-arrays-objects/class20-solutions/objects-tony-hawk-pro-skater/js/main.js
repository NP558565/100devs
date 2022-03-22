//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkater(name, age, stance, sponsor) {
    this.name = name
    this.age = age
    this.stance = stance
    this.sponsor = sponsor
    this.kick_flip = function() {
        alert(`${this.name} did a kick flip!`)
    }
    this.thank = function() {
        alert(`I'd like to thank ${this.sponsor}. They helped me form the beginning!`)
    }
    this.skate_style = function (){
        alert(`I always skate ${this.stance} footed.`)
    }
}

let theHawk = new MakeSkater('Tony', 52, 'goofy', 'Vans')

theHawk.skate_style()
theHawk.kick_flip()
theHawk.thank()
================================================================================

//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function TonyHawkProSkaterCharacter(chName,sponsor,specialMove,stance){
  this.characterName = chName
  this.sponsor = sponsor
  this.specialTrick = specialMove
  this.stance = stance
  this.grind = function(){ alert('5050') }
  this.flip = function(){ alert('Kickflip Underflip') }
  this.taunt = function(){ alert('FIRRSTTTT TRRRYYYY') }
}

let kareemCampbell = new TonyHawkProSkaterCharacter('Kareem','Element','Laserflip','Goofy')
