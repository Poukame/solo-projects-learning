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
        console.log('~ answerState', answerState);
		
		const answerID = answerState.find(({isSelected}) => isSelected === true)
        console.log('~ answerID', answerID);
		
		const copyData = questionSet.map(el => {
				return el.questionID === questionID ?
				{
					...el,
					isSelected: answerID && answerID.isSelected,
					isCorrect: answerID && answerID.isCorrect
				} :
				el
			})
			console.log('copy', copyData)
			return copyData
		}

//console.log('question set',questionSet);

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
