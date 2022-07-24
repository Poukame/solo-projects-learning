import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Answers from './Answers';

export default function Questions({questionSet}) {

	const renderQuestions = questionSet.map((el) => {
		return (
			<div className={`quiz-container`} key={nanoid()}>
				<h2 className='quiz__question'>{decodeURIComponent(el.question)}</h2>
				<div className='quiz__btn-wrapper'>
					<Answers
						key={nanoid()}
						questionID={nanoid()}
						correctAnswer={el.correct_answer}
						allAnswers={el.allAnswers}
						checkAnswer={(questionID, answerState) => checkAnswer(questionID, answerState)}
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});
	
	function checkAnswer(questionID, answerState) {
		console.log('')
	}

	return (<>
	{renderQuestions}
	<div className='result-container'>
	<h2 className='result-text'>You scored 3/5 correct answers</h2>
	<button className='check-btn'>Check Answers</button>
	</div>
	</>)
}
