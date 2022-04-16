 // Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

 class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello(){
        console.log(`Hello, i am a ${this._role} at #100Devs!`)
    }
 }

 class Front extends Contractor {
    constructor(name,role,tech) {
        super(name,role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, i am on the ${this._role} team at 100Devs and i use ${this._tech}`)
    }
 }

 class Back extends Contractor {
    constructor(name,role,tech) {
        super(name,role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, i am on the ${this._role} team at 100Devs and i use ${this._tech}`)
    }
 }

let bob = new Contractor("Bob","Front-End")
let simba = new Front("Simba", "Front-End", "React")
let machi = new Back ("The Machine", "Back-End", "Node")
let agency = [bob,simba,machi]
for (person of agency) {
    person.sayHello()
}
