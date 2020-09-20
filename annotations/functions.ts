const add = (a: number, b: number): number => {
	return a + b;
};

function multiply (a: number, b: number): number {
	return a * b;
}

const divide = function (a: number, b: number): number {
	return a / b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}
	else {
		return message;
	}
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
};
const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(todaysWeather);

const loggerWeather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};
