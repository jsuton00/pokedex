export const searchArray = (arr, keyword) => {
	const searchTerm = keyword.toLowerCase();
	return arr.filter((value) =>
		value.name.toLowerCase().match(new RegExp(searchTerm, 'g')),
	);
};

export const joinArrayItemstoString = (arr) => {
	let abilties = arr.length > 0 && arr.map((a) => a.ability.name);
	let joinedString;
	if (abilties.length >= 1) {
		joinedString = abilties.join(', ');
	} else {
		joinedString = abilties;
	}

	return joinedString;
};
