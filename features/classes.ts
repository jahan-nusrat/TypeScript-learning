class Vehicle {
	color: string = 'red';

	public honk (): void {
		console.log('beep');
	}

	constructor (public tea: string) {}

	protected oil (): void {
		console.log('petrol or gasoline');
	}
}

const vehicle: Vehicle = new Vehicle('orange');
vehicle.honk();
console.log(vehicle.color);
console.log(vehicle.tea);

//we cannot overwrite a modifier but overwrite the methods

//public -> can be accessible from anywhere anytime
//private -> can be accessible by another method of the same class
//protected -> can be accessible by another method of the same class or by its child classes
//constructors from derived classes must contain a "super" call

class Car extends Vehicle {
	constructor (public wheel: number, tea: string) {
		super(tea);
	}

	private drive (): void {
		console.log('Vroom');
	}

	startDriving (): void {
		this.drive();
		this.oil();
	}
}

const car = new Car(4, 'brown');
car.honk();
car.startDriving();
console.log(car.tea, ' ', car.wheel);
