import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setSearchTerm, searchPokemons } from '../store/actions/pokemons';

const SearchBar = (props) => {
	const { searchTerm, setSearchTerm, searchPokemons } = props;

	const onChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		searchPokemons(searchTerm);
	};
	return (
		<form name="search-form" onSubmit={onSubmit} className="search-form">
			<input
				type="text"
				onChange={onChange}
				className="search-input"
				placeholder="Search for Pokemon..."
				value={searchTerm}
			/>
			<span className="search-icon">
				<FaSearch />
			</span>
		</form>
	);
};

const mapStateToProps = (state) => ({
	searchTerm: state.pokemons.searchTerm,
});

export default connect(mapStateToProps, { setSearchTerm, searchPokemons })(
	SearchBar,
);
