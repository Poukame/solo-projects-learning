import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

function Answers({ correctAnswer, allAnswers, questionID, saveToLocalStorage, status }) {
 
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
  
	

	function handleClick(answerID, questionID, answer, isSelected) {
		
		setAnswerState((el) => {
			return el.map((item) => {
				return item.answerID === answerID
					? {
							...item,
							isSelected: !isSelected,
							isCorrect: !isSelected && (item.answer === item.correctAnswer)
					  }
					: {
							...item,
							isSelected: false,
							isCorrect: false
					  };
			});
		});
		//calculateScore(questionID, answerState[0].correctAnswer === answer)
	}

	useEffect(() => {saveToLocalStorage(questionID, answerState)}, [answerState])

	function style(state) {
        if(state) {
		return {
			backgroundColor: 'var(--clr-btn-select)',
			border: 'none',
		}}
	}


	const renderBtn = answerState.map((el) => {
		return (
			<button
				key={nanoid()}
				className='quiz--btn'
				style={style(el.isSelected)}
				onClick={() => {handleClick(el.answerID, el.questionID, el.answer, el.isSelected)}}
			>
				{decodeURIComponent(el.answer)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
