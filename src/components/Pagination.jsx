import React from 'react';

const Pagination = (props) => {
	const { pokemonsPerPage, totalPokemons, paginate } = props;

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
		pageNumbers.push([i]);
	}

	return (
		<nav className="pagination-navbar">
			<ul className="pagination">
				{pageNumbers.map((number) => {
					return (
						<li key={number} className="page-item">
							<a
								href="/#"
								onClick={() => paginate(number)}
								className="page-link"
							>
								{number}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Pagination;
