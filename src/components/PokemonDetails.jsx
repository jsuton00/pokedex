import React from 'react';
import { connect } from 'react-redux';
import PokemonCard from './PokemonCard';
import { MdFemale, MdMale } from 'react-icons/md';
import { joinArrayItemstoString } from '../utils/arrayUtils';

const PokemonDetails = (props) => {
	const { pokemon, pokemonSpecie } = props;

	console.log(pokemon);
	console.log(pokemonSpecie);
	return (
		<div className="pokemon-details-row row">
			<div className="pokemon-details-card">
				{pokemon && (
					<PokemonCard
						pokemonId={pokemon.id}
						pokemonName={pokemon.name}
						pokemonImage={pokemon.sprites.front_default}
						pokemonTypes={pokemon.types}
					/>
				)}
			</div>

			<div className="pokemon-details-info">
				{pokemonSpecie && (
					<p className="pokemon-details-flavour-text-row">
						{pokemonSpecie.flavor_text_entries[0].flavor_text}
					</p>
				)}
				<div className="pokemon-details-info-card">
					<div className="pokemon-details-info-card-col">
						{pokemon && (
							<p className="pokemon-details-height">
								<span>Height:</span>
								{`${pokemon.height / 10} m`}
							</p>
						)}
						{pokemon && (
							<p className="pokemon-details-weight">
								<span>Weight:</span>
								{`${pokemon.weight / 10} kg`}
							</p>
						)}
						{pokemonSpecie && (
							<p className="pokemon-details-gender">
								<span>Gender:</span>
								{`${pokemonSpecie.gender_rate}`}
							</p>
						)}
					</div>
					<div className="pokemon-details-info-card-col">
						{pokemonSpecie && (
							<p className="pokemon-details-capture-rate">
								<span>Capture rate:</span>
								{`${pokemonSpecie.capture_rate}%`}
							</p>
						)}
						{pokemon && (
							<p className="pokemon-details-abilities">
								<span>Abilities:</span>
								{joinArrayItemstoString(pokemon.abilities)}
							</p>
						)}
						{pokemonSpecie && (
							<p className="pokemon-details-habitat">
								<span>Habitat:</span>
								{pokemonSpecie.habitat.name}
							</p>
						)}
					</div>
					<div className="pokemon-details-info-card-col"></div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	pokemon: state.pokemons.pokemon,
	pokemonSpecie: state.pokemons.pokemonSpecie,
});

export default connect(mapStateToProps, {})(PokemonDetails);
