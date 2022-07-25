import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Answers from './Answers';

export default function Questions({ questionDB }) {

	const initialQuestionState = questionDB.map((el) => {
		return {
			key: nanoid(),
			questionID: nanoid(),
			allAnswers: el.allAnswers,
			correctAnswer: el.correct_answer,
			question: el.question,
		};
	});

	const [questionSet, setQuestionSet] = useState(initialQuestionState);
	useEffect(() => {setQuestionSet(initialQuestionState)}, [questionDB])

	const renderQuestions = questionSet.map((el) => {
		return (
			<div className={`quiz-container`}>
				<h2 className='quiz__question'>{decodeURIComponent(el.question)}</h2>
				<div className='quiz__btn-wrapper'>
					<Answers
						key={nanoid()}
						questionID={el.questionID}
						correctAnswer={el.correctAnswer}
						allAnswers={el.allAnswers}
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});

	return (
		<>
			{renderQuestions}
			<div className='result-container'>
				<h2 className='result-text'>You scored 3/5 correct answers</h2>
				<button className='check-btn'>Check Answers</button>
			</div>
		</>
	);
}
