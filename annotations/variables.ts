let apples: number = 3;
apples = 10;
console.log(apples);
let nothing: undefined = undefined;

//arrays
let colors: string[] = [ 'red', 'blue', 'green' ];
/* colors.forEach((color: string) => {
	console.log(color);
}); */

function myColor (color: string[]) {
	color.forEach((c: string) => {
		console.log(c);
	});
}
myColor(colors);

//classes

class Car {}
let car: Car = new Car();

//object Literal

let point: { x: number; y: number } = {
	x: 10,
	y: 20
};

//Function

const myFunc: (i: number) => void = (i: number) => {
	console.log(i);
};

//When to use Annotations
//1.function that returns the any type
const json = '{"x":20, "y":30}';
const coordinate: { x: number; y: number } = JSON.parse(json);
console.log(coordinate);

//2. WHen we declare a variable on one line and initialize it later
const words = [ 'red', 'blue', 'green' ];
let foundWords: boolean;
if (words[0] === 'red') {
	foundWords = true;
	console.log(foundWords);
}
else {
	foundWords = false;
	console.log(foundWords);
}

//3. Variables whose type can not be inferred correctly
let num = [ -1, -10, 12 ];
let numAboveZero: boolean | number = false;
for (let i = 0; i < num.length; i++) {
	if (num[i] > 0) {
		numAboveZero = num[i];
	}
}
