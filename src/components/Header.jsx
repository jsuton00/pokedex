import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
	return (
		<header className="header">
			<div className="header-row container">
				<div className="header-brand">
					<Link to="/" className="header-brand-link">
						<h1 className="header-brand-title">Pokedex</h1>
					</Link>
				</div>
				<div className="header-search-bar">
					<SearchBar />
				</div>
			</div>
		</header>
	);
};

export default Header;
