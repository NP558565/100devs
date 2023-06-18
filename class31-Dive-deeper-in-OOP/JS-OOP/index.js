// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1,
// 	},
// 	draw: function () {
// 		console.log("draw");
// 	},
// };

// circle.draw();

//if we wanted to create another circle object, we would have duplicated the function. so if we have a bug in this method, we would have to fix the same method in all the objects
// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1,
// 	},
// 	draw: function () {
// 		console.log("draw");
// 	},
// };

//if an object has one or more methods, we say that object has behavior like a person who can do different things. if it didn't have a method, duplicated literal would not be a problem

//if key and value are the same, you can remove the noise so radius: radius can just be radius,
//Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			console.log("draw");
		},
	};
}

//const circle = createCircle(1); //pass 1 as radius

//looks like a class but js doesn't have classes
//Constructor Function - this is also an object
function Circle(radius) {
	this.radius = radius; //reference to the object that is executing this piece of code, set to argument
	this.draw = function () {
		console.log("draw");
	};
}
const another = new Circle(1); //will create an empty object, then use 'this' to point to the global object

//defining global variables is bad practice & forgetting new will give you an error
//const another = Circle(1);

//as developer you should be familiar with both factory and constructor, choose the one you prefer

//every object in js has a property called constructor and that references the function that was used to construct or create that object

let x = {};
//JavaScript translates to let x = new Object();
//new String(); //'', "", ``
//new Boolean(); //true, false
//new Number(); //1, 2, 3...

// const Circle1 = new Function(
// 	"radius",
// 	`
// this.radius = radius;
// this.draw = function () {
// 	console.log("draw");
// }
// `
// );
// const circle = new Circle1(1);

//console circle shows radius, draw, prototype: object

Circle.call({}, 1); //if we had multiple arguments we would do 1, 2, 3, 4

//Primitives or Value Types: number, string, boolean, symbol, undefined, null
//Primitives are copied by their value
//Reference Types - object, function, array
//Objects are copied by their reference

// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); //this will log 10

let obj = { value: 10 };

function increase(obj) {
	obj.value++;
}

increase(obj);
console.log(obj); //this will log 11
//the reason for this is because when we call increase(obj), this object is passed by it's reference. So the local parameter we have in the function will point -> to the same object defined in "let obj = {value: 10}"

//Objects are dynamic in JavaScript so you can add/remove additional properties to it whenever you need to, which makes JavaScript super powerful. C# / Java would need to change the class

//dot notation - less verbose and simpler
another.location = { x: 1 };

//bracket notation is same as dot
//another['location'] = { x: 1 };

//but useful in certain scenarios where you want to dynamically access a property name - want to access location of propertyName or if you have special characters / spaces 'center location' or 'center-location'
//const propertyName = 'location';
//another[propertyName] = { x: 1 };

delete another.location;
//delete another['location']

//######ENUMERATING PROPERTIES aka iterate over properties

for (let key in another) {
	if (typeof another[key] !== "function") console.log(key, another[key]);
}

const keys = Object.keys(another); //this will return all the keys in another as an array
console.log(keys);

//check for existence of a property or method in an object use 'in' operator
if ("radius" in another) {
	console.log("Radius is in the object");
}

// ABSTRACTION
//hide the details, show only the essentials
//avoid having to add a argument everywhere the function is public - make it private

//javascript has closure: determines what variables will have accessible to an inner function - scope limited to that function if variables declared in that function
//dont confuse closure with scope, scope is temporary and dies while closure will preserve their state

function Cirle3(radius) {
	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	let computeOptimumLocation = function (factor) {
		//..
	};

	this.draw = function () {
		let x, y; //this is scope and dies outside this function
		computeOptimumLocation(0.1);

		//this.radius to access members of this object

		console.log("draw");
	};
}

const circle3 = new Circle3(10);
circle3.draw();

//closure is what is inside the inner function, those variables will continue to stay in memory like computerOptimumLocation

//####GETTER and SETTERS
//compute is a private member

function Cirle4(radius) {
	this.radius = radius;

	let defaultLocation = { x: 0, y: 0 };

	//solution 1
	this.getDefaultLocation = function () {
		//closure of this function includes all variables defined here and parent function
		return defaultLocation;
	};

	this.draw = function () {
		console.log("draw");
	};

	Object.defineProperties(this, "defaultLocation", {
		get: function () {
			return defaultLocation;
		},
		set: function (value) {
			if (!value.x || !value.y) throw new Error("Invalid location.");
			defaultLocation = value;
		},
	});
}

const circle4 = new Circle4(10);
circle3.draw();

//private function: defaultLocation can't be accessed from the outside but what if you want to display it outside your function
circle3.getDefaultLocation();
//bad syntax - calling this as a method. would be better to circle4.defaultLocation = 0;
