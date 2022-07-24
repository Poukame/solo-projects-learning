import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Answers from './Answers';

export default function Questions(props) {
	const { questionSet } = props;

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
					/>
				</div>
				<hr className='quiz--divider'></hr>
			</div>
		);
	});

	return <>{renderQuestions}</>;
}
