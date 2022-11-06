import React from 'react';
import Pokemons from '../components/Pokemons';

const HomePage = () => {
	return (
		<div className="page home-page">
			<div className="page-content container home-page-content">
				<Pokemons />
			</div>
		</div>
	);
};

export default HomePage;
