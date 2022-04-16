//=> 4 pillars of object orientation in practice
class Animal {              // ENCAPSULATION - storing properties and methods together in one object
    constructor(name) {     // (made it easier to add new stuff / easier to read)
        this._name = name   // ABSTRACTION - name of the object will be set to _name (so hidden)
    }
    get name() {            // using a getter to return when somebody wants the name with obj.name
        return this._name
    }
    speak() {
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal {      // INHERITANCE - make class from another class (share parent properties / methods)
    constructor(name, breed) {  // (helps to elimante redundant code)
        super(name)             // grabs / inherits the "this._name = name" from the class Animal
        this._breed = breed     // abstract the breed with _breed (could / should not be touched from anybody)
    }
    get breed() {
        return this_breed
    }
    speak() {
        super.speak()           // grab the speak method from the parent class Animal
        console.log(`${this._name} barks`)  // get an additonal output (so one line from the parent class and one individual)
    }
}

class Cat extends Animal {
    constructor(name, breed) {
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak() {
        super.speak()
        console.log(`${this.name} meows`)
    }
}

let simba = new Dog("Simba", "Shepard")
let machi = new Dog("The Machine", "Pitbull")
let salem = new Cat("Salem", "American Shorthair")

let farm = [simba,machi,salem]
for (a of farm) {       // POLYMORPHISM code written to use interface (eg. speak-function) and
    a.speak()           // knows how to use it at different objects (eg. barks or meows)
}                       // (helps to avoid if/else and switch cases)

