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
	// new branch
	const [questionSet, setQuestionSet] = useState(initialQuestionState);
	//const [test, setTest] = useState(true)
	useEffect(() => {setQuestionSet(initialQuestionState)}, [questionDB])

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
						checkAnswer={checkAnswer}
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});


	function checkAnswer(questionID, answer) {	
		console.log(answer)
		//setTest(!test)
		// setQuestionSet(el => {
		// 	return el.map(el => {
		// 		return el.questionID === questionID ?
		// 		{
		// 			...el,
		// 			answerPoint: answer ? 1 : 0,
		// 		} :
		// 		el
		// 	})
		// })
	}

//console.log('question set',questionSet);

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
