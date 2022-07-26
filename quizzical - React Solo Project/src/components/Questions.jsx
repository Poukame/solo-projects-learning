import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Answers from './Answers';

export default function Questions({ questionDB, changeStatus, status }) {


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
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});


	function saveToLocalStorage(questionID, answerState) {	
        
		const answerID = answerState.find(({isSelected}) => isSelected === true)
		const question = JSON.parse(localStorage.getItem('savedAnswers')) || questionSet
		
		const copyData = question.map(el => {
				return el.questionID === questionID ?
				{
					...el,
					isSelected: answerID && answerID.isSelected,
					isCorrect: answerID && answerID.isCorrect
				} :
				el
			})

			localStorage.setItem('savedAnswers', JSON.stringify(copyData))
			return copyData
		}

	return (
		<>
			{renderQuestions}
			<div className='result-container'>
				<h2 className='result-text'>You scored 3/5 correct answers</h2>
				<button className='check-btn' onClick={changeStatus}>{status === 'end' ? 'Try Again' : 'Check Answers'}</button>
			</div>
		</>
	);
}
