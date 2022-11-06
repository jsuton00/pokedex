import axios from 'axios';

export const fetchPokemons = async () => {
	let pokemons = await axios
		.get('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then((response) =>
			axios.all(
				response.data.results.map((p) =>
					axios.get(p.url).then((response) => response.data),
				),
			),
		);

	return pokemons;
};
