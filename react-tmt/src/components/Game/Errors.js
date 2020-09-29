import React, { useContext } from 'react';
import GameContext from '../../context/game/gameContext';

const Errors = () => {
	const gameContext = useContext(GameContext);
	const { numErrors } = gameContext;

	return (
		<div>
			<h5>Number of mistakes : { numErrors }</h5>
		</div>
	)
}

export default Errors;
