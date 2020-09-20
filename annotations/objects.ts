const profile = {
	name: 'John',
	age: 20,
	coords:
		{
			lat: 9.98,
			lng: 45.23
		},
	setAge (age: number): void {
		this.age = age;
	}
};

const { age }: { age: number } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
