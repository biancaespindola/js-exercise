//The forEach() method
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
	console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
console.log('-------------------------------');

//The filter() method
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
	return num > 20;
});
console.log('-------------------------------');

//The map method
[0, 10, 20, 30, 40, 50].map(function (num) {
	return num / 10;
});
console.log('-------------------------------');

//convert an object to an array
const result = [];
const drone = {
	speed: 100,
	color: 'yellow',
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
	result.push(key, drone[key]);
});
console.log(result);
console.log('-------------------------------');

//new Map();
let bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log(bestBoxers);
//to get a specific valu, you nedd touse the get() method
bestBoxers.get(1);
console.log('-------------------------------');

//new Set();
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
