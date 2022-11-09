import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import {
	getPokemons,
	sortPokemonsByName,
	sortPokemonsById,
	getPokemon,
	fetchPokemonSpecie,
} from '../store/actions/pokemons';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

const Pokemons = (props) => {
	const {
		pokemons,
		getPokemons,
		sortOption,
		sortPokemonsByName,
		sortPokemonsById,
		getPokemon,
		fetchPokemonSpecie,
		loadingPokemons,
		errorPokemons,
	} = props;

	const [currentPage, setCurrentPage] = useState(1);
	const [pokemonsPerPage] = useState(10);

	const navigate = useNavigate();

	// Get current pokemons
	const indexOfLastPost = currentPage * pokemonsPerPage;
	const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
	const currentPokemons =
		pokemons.length > 0 && pokemons.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

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

	const goToPokemon = (id) => {
		navigate({ pathname: `/pokemon/:${id}` });
		getPokemon(id);
		fetchPokemonSpecie(id);
	};
	return (
		<>
			{loadingPokemons && <Loader />}
			{errorPokemons && <ErrorMessage />}
			<div className="pokemons">
				{currentPokemons.length > 0 &&
					currentPokemons.map((pokemon) => {
						return (
							<PokemonCard
								key={pokemon.id}
								pokemonId={pokemon.id}
								pokemonName={pokemon.name}
								pokemonImage={pokemon.sprites.front_default}
								pokemonTypes={pokemon.types}
								goToPokemon={() => goToPokemon(pokemon.id)}
							/>
						);
					})}
			</div>
			<Pagination
				pokemonsPerPage={pokemonsPerPage}
				totalPokemons={pokemons.length}
				paginate={paginate}
			/>
		</>
	);
};

const mapStateToProps = (state) => ({
	pokemons: state.pokemons.pokemons.length > 0 && state.pokemons.pokemons,
	sortOption: state.pokemons.sortOption,
	loadingPokemons: state.pokemons.loadingPokemons,
	errorPokemons: state.pokemons.errorPokemons,
});

export default connect(mapStateToProps, {
	getPokemons,
	sortPokemonsByName,
	sortPokemonsById,
	getPokemon,
	fetchPokemonSpecie,
})(Pokemons);
