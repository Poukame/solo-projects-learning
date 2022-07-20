import React from 'react';
import { useState } from 'react';

function Button({ answerID, answer, isSelected, correctAnswer }) {
	const style = {
		backgroundColor: 'var(--clr-btn-select)',
		border: 'none',
	};

	return (
		<button
			className='quiz--btn'
			answerid={answerID}
			style={isSelected ? style : {}}
			onClick={() => handleClick(answerID, isSelected)}
		>
			{answer}
		</button>
	);
}

export default Button;
