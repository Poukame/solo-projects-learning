import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Answers({ correctAnswer, allAnswers }) {

	const [toggleBtn, setToggleBtn] = useState([{ answerID: '12348856', isSelected: false }]);

	function handleClick(answerID, isSelected) {
		console.log(answerID);
		console.log(isSelected);
	}

	const renderBtn = allAnswers.map((el) => {
		return (
			<button
				className='quiz--btn'
				answerID={nanoid()}
				//style={isSelected ? style : {}}
				//onClick={() => handleClick(answerID, isSelected)}
			>
				{decodeURIComponent(el)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
