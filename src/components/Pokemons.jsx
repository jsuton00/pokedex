import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../store/actions/pokemons';
import PokemonCard from './PokemonCard';

const Pokemons = (props) => {
	const { pokemons, getPokemons } = props;

	useEffect(() => {
		getPokemons();
	}, [getPokemons]);

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
});

export default connect(mapStateToProps, { getPokemons })(Pokemons);
