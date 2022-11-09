import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { SORT_OPTIONS } from '../constants/options';
import { setSortOption } from '../store/actions/pokemons';

const Sort = (props) => {
	const { sortOption, setSortOption } = props;

	const sortOptionsRef = useRef();

	const onChange = (e) => {
		if (e.target.value === sortOptionsRef.current.value) {
			setSortOption(e.target.value);
		}
	};
	return (
		<div className="sort-container container row">
			<span className="sort-container-title">Sort</span>
			<div className="sort-select-section">
				<select
					ref={sortOptionsRef}
					onChange={onChange}
					className="sort-select"
					value={sortOption}
				>
					{SORT_OPTIONS.length > 0 &&
						SORT_OPTIONS.map((option) => {
							return (
								<option
									key={option}
									value={option}
									className="sort-select-option"
								>
									{option}
								</option>
							);
						})}
				</select>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	sortOption: state.pokemons.sortOption,
});

export default connect(mapStateToProps, { setSortOption })(Sort);
