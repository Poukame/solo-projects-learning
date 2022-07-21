import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import Answers from './Answers'


export default function Questions(props) {
	const {questionSet, allAnswers, correctAnswer} = props;

	// const renderAnswers = allAnswers.map((el) => {
	// 	return (
	// 		<Answers
	// 			key={nanoid()}
	// 			answer={decodeURIComponent(el)}
	// 			correctAnswer={correctAnswer}
	// 			allAnswers={allAnswers}
	// 		/>
	// 	)})

	return (
		<div className={`quiz-container`}>
			<h2 className='quiz__question'>{decodeURIComponent(questionSet)}</h2>
			<div className='quiz__btn-wrapper'>
				<Answers 
				
				correctAnswer={correctAnswer}
				allAnswers={allAnswers}
				/>
			</div>
			<hr className='quiz--divider'></hr>
		</div>
	);
}
