import React from 'react';
import Pokemons from '../components/Pokemons';
import Sort from '../components/Sort';

const HomePage = () => {
	return (
		<div className="page home-page">
			<div className="page-content container home-page-content">
				<Sort />
				<Pokemons />
			</div>
		</div>
	);
};

export default HomePage;
