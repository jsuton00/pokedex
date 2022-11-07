import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	getPokemons,
	sortPokemonsByName,
	sortPokemonsById,
} from '../store/actions/pokemons';
import PokemonCard from './PokemonCard';

const Pokemons = (props) => {
	const {
		pokemons,
		getPokemons,
		sortOption,
		sortPokemonsByName,
		sortPokemonsById,
	} = props;

	useEffect(() => {
		getPokemons();
	}, [getPokemons]);

	useEffect(() => {
		if (sortOption) {
			sortPokemonsByName(sortOption);
		}
	}, [sortPokemonsByName, sortOption]);

	useEffect(() => {
		if (sortOption) {
			sortPokemonsById(sortOption);
		}
	}, [sortPokemonsById, sortOption]);

	console.log(pokemons);
	return (
		<div className="pokemons">
			{pokemons.length > 0 &&
				pokemons.map((pokemon) => {
					return (
						<PokemonCard
							key={pokemon.id}
							pokemonId={pokemon.id}
							pokemonName={pokemon.name}
							pokemonImage={pokemon.sprites.front_default}
							pokemonTypes={pokemon.types}
						/>
					);
				})}
		</div>
	);
};

const mapStateToProps = (state) => ({
	pokemons: state.pokemons.pokemons.length > 0 && state.pokemons.pokemons,
	sortOption: state.pokemons.sortOption,
});

export default connect(mapStateToProps, {
	getPokemons,
	sortPokemonsByName,
	sortPokemonsById,
})(Pokemons);
