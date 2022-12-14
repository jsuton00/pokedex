import React, { useRef } from 'react';

const PokemonCard = (props) => {
	const { pokemonId, pokemonName, pokemonImage, pokemonTypes, goToPokemon } =
		props;

	const pokemonCardRef = useRef();

	const onClick = (e) => {
		if (e.target.value === pokemonCardRef.current.value) {
			goToPokemon(e.target.value);
		}
	};
	return (
		<div
			ref={pokemonCardRef}
			onClick={onClick}
			className={`pokemon-card pokemon-card-${pokemonTypes[0].type.name} card`}
			value={pokemonId}
		>
			<div className="pokemon-card-header card-header">
				<h5 className="pokemon-name card-title">{pokemonName}</h5>
				<p className="pokemon-id-number">
					{pokemonId < 100
						? `# 0${pokemonId < 10 ? `0${pokemonId}` : pokemonId}`
						: `# ${pokemonId}`}
				</p>
			</div>
			<div className="pokemon-card-body card-body">
				<div className="pokemon-card-img card-img">
					<img src={pokemonImage} alt={pokemonName} />
				</div>
			</div>
			<div className="pokemon-card-footer card-footer">
				<p className="pokemon-types-row">
					{pokemonTypes.length > 0 &&
						pokemonTypes.map((t) => {
							return (
								<span
									key={t.type.name}
									className={`pokemon-type pokemon-type-${t.type.name}`}
								>
									{t.type.name}
								</span>
							);
						})}
				</p>
			</div>
		</div>
	);
};

export default PokemonCard;
