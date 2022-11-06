import { SORT_OPTIONS } from '../../constants/options';
import {
	FETCH_POKEMONS_FAIL,
	FETCH_POKEMONS_SUCCESS,
	LOADING_POKEMONS,
	SEARCH_POKEMONS,
	SET_SEARCH_TERM,
	SET_SORT_OPTION,
} from '../actions/actionTypes';

const initialState = {
	pokemons: [],
	pokemon: '',
	searchTerm: '',
	sortOption: '',
	sortOptions: SORT_OPTIONS,
	loadingPokemons: false,
	errorPokemons: false,
};

const pokemons = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POKEMONS_SUCCESS:
			return {
				...state,
				pokemons: action.pokemons.length > 0 && action.pokemons,
				loadingPokemons: false,
			};
		case FETCH_POKEMONS_FAIL:
			return {
				...state,
				loadingPokemons: false,
				errorPokemons: true,
			};
		case SET_SEARCH_TERM:
			return { ...state, searchTerm: action.searchTerm };
		case SEARCH_POKEMONS:
			return {
				...state,
				pokemons: action.pokemons,
				searchTerm: action.searchTerm,
			};
		case SET_SORT_OPTION:
			return { ...state, sortOption: action.sortOption };
		case LOADING_POKEMONS:
			return { ...state, loadingPokemons: true };
		default:
			return state;
	}
};

export default pokemons;
