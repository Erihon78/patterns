"use strict";
// Underscore private method
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
(function() {
	console.log('Function is on');
})();
// Reusable Code Import, Export;
// Bind .bind(this) // SELF, THAT;
var addThis = function(a, c, u) {
		return this.num + a + c + u;
	},
	obj = {
		num: 1
	},
	bound = addThis.bind(obj);

console.log('Bind Function:', bound(19, 20, 67));
// Singelton
// The Singleton Pattern limits the number of 
// instances of a particular object to just one. This single instance is called the singleton.
var counterModule = (function() {
	var instance,
		counter = 0;

	var getCounter = function() {
		return counter;
	}

	var increaseCounter = function() {
		counter++;
	}

	var createInstance = function() {
		return {
			getCounter: getCounter,
			increaseCounter: increaseCounter
		}
	}

	return {
		getInstance: function() {
			return instance || (instance = createInstance());
		}
	}
})();
// Iterator
// The Iterator pattern allows clients to effectively loop over a collection of objects
var element;
var agg = (function() {
	var index = 0,
		data = [1, 2, 3, 4, 5],
		length = data.length;

	return {
		next: function() {
			var element;
			if (!this.hasNext()) {
				return null;
			}
			element = data[index];
			index = index + 2;
			return element;
		},
		hasNext: function() {
			return index < length;
		},
		rewind: function() {
			index = 0;
		},
		current: function() {
			return data[index];
		}
	};
}());
// agg provides us with an api containing next(), hasNext(), current() and rewind()
//   private data is hidden behind our api via the module pattern

while (agg.hasNext()) {
	console.log('Next:', agg.next());
}
agg.rewind();
console.log('Current:', agg.current());
// Decorator
// The Decorator pattern extends (decorates) an object’s behavior dynamically.
function MacBook() {
	this.cost = function() {
		return 997;
	};
	this.screenSize = function() {
		return 13.3;
	};
}
// Decorator 1
function Memory(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 75;
	}
}
// Decorator 2
function Engraving(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 200;
	};
}

// Decorator 3
function Insurance(macbook) {
	var v = macbook.cost();
	macbook.cost = function() {
		return v + 250;
	};
}
var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3
//
// Proxy Object
// Strategy
// Facade
// Factory
// Observer
// Mediator