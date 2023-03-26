//  an object is not iterable
// const car = {
//     speed: 100,
//     color: "blue"
// }

// for(prop of car) {
//     console.log(prop)
// }

const colors = ['red', 'orange', 'yellow'];
for (var color of colors) {
	console.log(color);
}

// methods to over loop objects Object.keys(), Object.values(), and Object.entries()

// The Object.key() method

const car2 = {
	speed: 200,
	color: 'red',
};
console.log(Object.keys(car2));

// The Object.values() method

const car3 = {
	speed: 300,
	color: 'yellow',
};
console.log(Object.values(car3)); // [300, 'yellow']

// The Object.entries() method
const car4 = {
	speed: 400,
	color: 'magenta',
};
console.log(Object.entries(car4));

// iterable objects
const car = {
	engine: true,
};
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('the sportsCar object: ', sportsCar);

for (prop in sportsCar) {
	console.log('🤔', prop);
}

for (prop of Object.keys(sportsCar)) {
	console.log('🎯', prop + ': ' + sportsCar[prop]);
}
