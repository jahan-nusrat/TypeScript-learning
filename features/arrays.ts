const cars: string[] = [ 'chevy', 'ford', 'audi' ];

//Help with inference when extracting values
const car: string = cars[1];

//prevent incompatible values
cars.push(20);

//help with map
let carMakers = cars.map((car: string): string => {
	return car.toUpperCase();
});

//flexible types
const arr: (string | number | Date | boolean)[] = [ 'sunday', 34, new Date() ];
arr.push(undefined, false);
