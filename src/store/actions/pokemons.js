import { fetchPokemons } from '../../apis/api';
import { searchArray } from '../../utils/arrayUtils';
import {
	FETCH_POKEMONS_FAIL,
	FETCH_POKEMONS_SUCCESS,
	LOADING_POKEMONS,
	SEARCH_POKEMONS,
	SET_SEARCH_TERM,
	SET_SORT_OPTION,
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

	if (searchTerm && searchTerm.length > 0) {
		searchResults = searchArray(pokemons, searchTerm);
	}

	dispatch({
		type: SEARCH_POKEMONS,
		pokemons: searchResults.length > 0 && searchResults,
		searchTerm: searchTerm,
	});
};

export const setSortOption = (sortOption) => (dispatch) => {
	dispatch({ type: SET_SORT_OPTION, sortOption: sortOption });
};
