import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import Answers from './Answers'


export default function Questions(props) {
	const {questionSet, allAnswers, correctAnswer} = props;

	const [btnToggle, setBtnToggle] = useState()

console.log('allAns',allAnswers);

	const renderAnswers = allAnswers.map((el) => {
		return (
			<Answers
				allAnswers={allAnswers}
				answerID={nanoid()}
				answer={decodeURIComponent(el)}
				correctAnswer={correctAnswer}
				isSelected={false}
			/>
		)})

	return (
		<div className={`quiz-container`}>
			<h2 className='quiz__question'>{decodeURIComponent(questionSet)}</h2>
			<div className='quiz__btn-wrapper'>
				{renderAnswers}
			</div>
			<hr className='quiz--divider'></hr>
		</div>
	);
}
