import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Answers from './Answers';
import Confetti from 'react-confetti'

export default function Questions({ questionDB, changeStatus, status, formData }) {
	
	const initialQuestionState = questionDB.map((el) => {
		return {
			key: nanoid(),
			questionID: nanoid(),
			allAnswers: el.allAnswers,
			correctAnswer: el.correct_answer,
			question: el.question,
			isSelected: null,
			isCorrect: false,
			point: 0,
		};
	});

	const [questionSet, setQuestionSet] = useState(initialQuestionState);
	useEffect(() => {
		setQuestionSet(initialQuestionState);
	}, [questionDB]);

	const savedAnwers = JSON.parse(localStorage.getItem('savedAnswers'));

	const totalScore = savedAnwers && savedAnwers.reduce((acc, cur) => acc + cur.point, 0);

	const renderQuestions = questionSet.map((el) => {
		return (
			<div className={`quiz-container`} key={nanoid()}>
				<h2 className='quiz__question'>{decodeURIComponent(el.question)}</h2>
				<div className='quiz__btn-wrapper'>
					<Answers
						key={nanoid()}
						questionID={el.questionID}
						correctAnswer={el.correctAnswer}
						allAnswers={el.allAnswers}
						saveToLocalStorage={saveToLocalStorage}
						status={status}
						savedAnswersDetails={savedAnwers}
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});

	function saveToLocalStorage(questionID, answerState) {
		const answer = answerState.find(({ isSelected }) => isSelected === true);
		const question = answer ? JSON.parse(localStorage.getItem('savedAnswers')) : questionSet;

		const copyData = question.map((el) => {
			return el.questionID === questionID
				? {
						...el,
						isSelected: answer && answer.answer,
						isCorrect: answer && answer.isCorrect,
						point: answer && answer.isSelected === answer.isCorrect ? 1 : 0,
				  }
				: el;
		});
		localStorage.setItem('savedAnswers', JSON.stringify(copyData));
		return copyData;
	}

	return (
		<>
			{renderQuestions}
			<div className='result-container'>
				{status === 'end' && (
					<h2 className='result-text'>You scored {totalScore}/{formData.quantity} correct answers</h2>
				)}
				<button className='check-btn' onClick={changeStatus}>
					{status === 'end' ? 'Try Again' : 'Check Answers'}
				</button>
			</div>
			{status === 'end' && ((totalScore/formData.quantity) > 0.5) && <Confetti />}
		</>
	);
}
