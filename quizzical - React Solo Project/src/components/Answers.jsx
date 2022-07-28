import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

function Answers({
	correctAnswer,
	allAnswers,
	questionID,
	saveToLocalStorage,
	status,
	savedAnswersDetails,
}) {
	const initialState = allAnswers.map((el) => {
		return {
			answer: el,
			correctAnswer: correctAnswer,
			questionID: questionID,
			answerID: nanoid(),
			isSelected: false,
			isCorrect: false,
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
							isCorrect: !isSelected && item.answer === item.correctAnswer,
					  }
					: {
							...item,
							isSelected: false,
							isCorrect: false,
					  };
			});
		});
	}

	useEffect(() => {
		status !== 'end' && saveToLocalStorage(questionID, answerState);
	}, [answerState]);

	function setStyle(selected, answer, questionID2, savedAnswersDetails) {
		const targetAnswer =
			savedAnswersDetails &&
			savedAnswersDetails.find(({ questionID }) => questionID === questionID2);

		if (selected && status === 'quiz') {
			return {
				backgroundColor: 'var(--clr-btn-select)',
				border: 'none',
			};
		}

		if (status === 'end' && answer === targetAnswer.correctAnswer) {
			return {
				backgroundColor: 'var(--clr-correct)',
				border: 'none',
			};
		} else if (status === 'end' && targetAnswer.isSelected === answer) {
			return {
				backgroundColor: 'var(--clr-wrong)',
				border: 'none',
				opacity: '.5',
			};
		} else if (status === 'end') {
			return {
				opacity: '.5',
			};
		}
	}

	const renderBtn = answerState.map((el) => {
		return (
			<button
				key={nanoid()}
				className='quiz--btn'
				style={setStyle(el.isSelected, el.answer, el.questionID, savedAnswersDetails)}
				onClick={() => {
					handleClick(el.answerID, el.isSelected);
				}}
			>
				{decodeURIComponent(el.answer)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
