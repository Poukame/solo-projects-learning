import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Answers({ correctAnswer, allAnswers, questionID }) {
	const initialState = allAnswers.map((el) => {
		return {
			answer: el,
			questionID: questionID,
			answerID: nanoid(),
			isSelected: false,
		};
	});

	const [answerState, setAnswerState] = useState(initialState);

	function handleClick(answerID, isSelected) {
		setAnswerState((el) => {
			return el.map((item) => {
				return item.answerID === answerID
					? {
							...item,
							isSelected: !isSelected,
					  }
					: {
							...item,
							isSelected: false,
					  };
			});
		});
	}

	const style = {
		backgroundColor: 'var(--clr-btn-select)',
		border: 'none',
	};

	const renderBtn = answerState.map((el) => {
		return (
			<button
				key={nanoid()}
				className='quiz--btn'
				style={el.isSelected ? style : {}}
				onClick={() => handleClick(el.answerID, el.isSelected)}
			>
				{decodeURIComponent(el.answer)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
