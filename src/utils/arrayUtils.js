export const searchArray = (arr, keyword) => {
	const searchTerm = keyword.toLowerCase();
	return arr.filter((value) =>
		value.name.toLowerCase().match(new RegExp(searchTerm, 'g')),
	);
};
