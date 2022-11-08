import { SORT_OPTIONS } from '../../constants/options';
import {
	FETCH_POKEMON,
	FETCH_POKEMONS_FAIL,
	FETCH_POKEMONS_SUCCESS,
	LOADING_POKEMONS,
	SEARCH_POKEMONS,
	SET_SEARCH_TERM,
	SET_SORT_OPTION,
	SORT_POKEMONS_BY_ID,
	SORT_POKEMONS_BY_NAME,
} from '../actions/actionTypes';

const initialState = {
	pokemons: [],
	pokemon: '',
	pokemonId: '',
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
		case FETCH_POKEMON:
			return { ...state, pokemon: action.pokemon, pokemonId: action.pokemonId };
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
		case SORT_POKEMONS_BY_NAME:
			return {
				...state,
				pokemons: action.pokemons,
				sortOption: action.sortOption,
			};
		case SORT_POKEMONS_BY_ID:
			return {
				...state,
				pokemons: action.pokemons,
				sortOption: action.sortOption,
			};
		case LOADING_POKEMONS:
			return { ...state, loadingPokemons: true };
		default:
			return state;
	}
};

export default pokemons;
