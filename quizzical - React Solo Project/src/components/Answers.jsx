import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Answers({ correctAnswer, allAnswers, questionID, checkAnswer }) {
    
	const initialState = allAnswers.map((el) => {
		return {
			answer: el,
			correctAnswer: correctAnswer,
			questionID: questionID,
			answerID: nanoid(),
			isSelected: false,
			isCorrect: false
		};
	});

	const [answerState, setAnswerState] = useState(initialState);
    console.log('~ answerState', answerState);

	function handleClick(answerID, isSelected) {
		isSelected = !isSelected
		
		setAnswerState((el) => {
			return el.map((item) => {
				return item.answerID === answerID
					? {
							...item,
							isSelected: isSelected,
							isCorrect: isSelected && (item.answer === item.correctAnswer)
					  }
					: {
							...item,
							isSelected: false,
							isCorrect: false
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
				onClick={() => {handleClick(el.answerID, el.isSelected); checkAnswer(questionID, answerState)}}
			>
				{decodeURIComponent(el.answer)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
