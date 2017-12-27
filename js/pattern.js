"use strict";
// console.log('It\'s Works!')
// CASE SWITCH
// Make many if more Simple
var inspect = 1,
	result = '';

switch (inspect) {
	case 0:
		result = "zero";
		break;
	case 1:
		result = "one";
		break;
	default:
		result: "unknown";
}
// Many way to convert String to Number
var year = "2018";
parseInt(year); +
year;
Number(year);
// HasOwnProperty, check 
// if this key have object
var x = {
	y: 10
};
console.log(x.hasOwnProperty("y")); //true
console.log(x.hasOwnProperty("z")); //false
// Сonstructor
var dog = {
	name: "Benji",
	getName: function() {
		return this.name;
	}
};

var Person = function(name) {
	this.name = name;
	this.say = function() {
		return `I am ${this.name}`;
	}
}

var erihon = new Person("Erihon");
erihon.say();

// Constructor - MyConstructor - first letter uppercase - new MyConstructor();
// Function - myFunction - first letter lowercase - myFunction();
// JSON
// JSON.parse() - convert in JavaScript Object var jrg = '{"name": "Oleg"}'
// JSON.stringify() - convert into JSON object var jrg = {"name": "Oleg"}
// RegEXP
// g - global search
// m - search in text
// i - search with out register
var no_letters = "abc123XYZ".replace(/[a-z]/gi, "");
console.log(no_letters);
// Error
try {
	if (someVar) {
		console.log(someVar)
	}
} catch (e) {
	console.error(`Error: ${e.name} : ${e.message}`);
}
// Immediately function
(function () {
	console.log('Function is on');
})();