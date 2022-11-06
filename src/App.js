import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/pokemon" element={<PokemonDetailsPage />} />
			</Routes>
		</>
	);
};

export default App;
