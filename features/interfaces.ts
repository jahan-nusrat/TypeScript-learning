interface Reportable {
	summery(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summery (): string {
		return this.name;
	}
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summery (): string {
		return `My sugar has ${this.sugar}gm of sugar`;
	}
};

const printSummery = (item: Reportable): void => {
	console.log(item.summery());
};

printSummery(oldCivic);
printSummery(drink);
