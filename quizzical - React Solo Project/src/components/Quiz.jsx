import React from 'react';

export default function Quiz(props) {
	const {question, answers, correct} = props;

	return (
		<div className='quiz-container'>
			<h2 className='quiz__question'>{decodeURIComponent(question)}</h2>
			<div className='quiz__btn-wrapper'>
				<button className='quiz--btn'>{decodeURIComponent(answers[0])}</button>
				<button className='quiz--btn'>{decodeURIComponent(answers[1])}</button>
				<button className='quiz--btn'>{decodeURIComponent(answers[2])}</button>
				<button className='quiz--btn'>{decodeURIComponent(answers[3])}</button>
			</div>
			<hr className='quiz--divider'></hr>

		</div>
	);
}
