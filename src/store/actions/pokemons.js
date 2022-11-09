import { fetchPokemon, fetchPokemons } from '../../apis/api';
import { searchArray } from '../../utils/arrayUtils';
import {
	FETCH_POKEMON,
	FETCH_POKEMONS_FAIL,
	FETCH_POKEMONS_SUCCESS,
	FETCH_POKEMON_SPECIE_FAIL,
	FETCH_POKEMON_SPECIE_SUCCESS,
	LOADING_POKEMONS,
	SEARCH_POKEMONS,
	SET_SEARCH_TERM,
	SET_SORT_OPTION,
	SORT_POKEMONS_BY_ID,
	SORT_POKEMONS_BY_NAME,
} from './actionTypes';

export const getPokemons = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING_POKEMONS });
		const response = await fetchPokemons();
		dispatch({ type: FETCH_POKEMONS_SUCCESS, pokemons: response });
	} catch (err) {
		console.error(err);
		dispatch({ type: FETCH_POKEMONS_FAIL });
	}
};

export const setSearchTerm = (searchTerm) => (dispatch) => {
	dispatch({ type: SET_SEARCH_TERM, searchTerm: searchTerm });
};

export const searchPokemons = (searchTerm) => (dispatch, getState) => {
	let pokemons = getState().pokemons.pokemons;
	let searchResults;

	if (searchTerm) {
		searchResults = searchArray(pokemons, searchTerm);

		dispatch({
			type: SEARCH_POKEMONS,
			pokemons: searchResults.length > 0 && searchResults,
			searchTerm: searchTerm,
		});
	} else {
		getPokemons();
	}
};

export const setSortOption = (sortOption) => (dispatch) => {
	dispatch({ type: SET_SORT_OPTION, sortOption: sortOption });
};

export const sortPokemonsByName = (sortOption) => (dispatch, getState) => {
	const sortPokemonsOptions = getState().pokemons.sortOptions;
	let pokemons = getState().pokemons.pokemons;

	if (!sortOption) {
		getPokemons();
	} else {
		if (sortOption === sortPokemonsOptions[0]) {
			getPokemons();
		} else if (sortOption === sortPokemonsOptions[3]) {
			pokemons = [...pokemons].sort((a, b) => (a.name > b.name ? 1 : -1));
		} else if (sortOption === sortPokemonsOptions[4]) {
			pokemons = [...pokemons].sort((a, b) => (b.name > a.name ? 1 : -1));
		}

		dispatch({
			type: SORT_POKEMONS_BY_NAME,
			pokemons: pokemons.length > 0 && pokemons,
			sortOption: sortOption,
		});
	}
};

export const sortPokemonsById = (sortOption) => (dispatch, getState) => {
	const sortPokemonsOptions = getState().pokemons.sortOptions;
	let pokemons = getState().pokemons.pokemons;

	if (!sortOption) {
		getPokemons();
	} else {
		if (sortOption === sortPokemonsOptions[0]) {
			getPokemons();
		} else if (sortOption === sortPokemonsOptions[1]) {
			pokemons = [...pokemons].sort((a, b) => (a.id > b.id ? 1 : -1));
		} else if (sortOption === sortPokemonsOptions[2]) {
			pokemons = [...pokemons].sort((a, b) => (b.id > a.id ? 1 : -1));
		}

		dispatch({
			type: SORT_POKEMONS_BY_ID,
			pokemons: pokemons.length > 0 && pokemons,
			sortOption: sortOption,
		});
	}
};

export const getPokemon = (pokemonId) => (dispatch, getState) => {
	const pokemons = getState().pokemons.pokemons;
	let pokemon;
	if (pokemonId) {
		pokemon = pokemons.length > 0 && pokemons.find((p) => p.id === pokemonId);
	}

	dispatch({ type: FETCH_POKEMON, pokemon: pokemon ? pokemon : '', pokemonId });
};

export const fetchPokemonSpecie = (pokemonId) => async (dispatch) => {
	try {
		dispatch({ type: LOADING_POKEMONS });
		let response;

		if (pokemonId) {
			response = await fetchPokemon(pokemonId);
		}

		dispatch({
			type: FETCH_POKEMON_SPECIE_SUCCESS,
			pokemonSpecie: response.data,
			pokemonId: pokemonId,
		});
	} catch (err) {
		console.log(err);
		dispatch({ type: FETCH_POKEMON_SPECIE_FAIL });
	}
};
