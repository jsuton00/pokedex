import React from 'react';
import PokemonDetails from '../components/PokemonDetails';

const PokemonDetailsPage = () => {
	return (
		<div className="page pokemon-details-page">
			<div className="page-content container pokemon-details-page-content">
				<PokemonDetails />
			</div>
		</div>
	);
};

export default PokemonDetailsPage;
