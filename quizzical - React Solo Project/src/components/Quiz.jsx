import React from 'react';

export default function Quiz(props) {
	//const {question, answers, index} = props;

	return (
		<div className='quiz-container'>
			<h2 className='quiz__question'>{decodeURIComponent('hh')}</h2>
			<div className='quiz__btn-wrapper'>
				<button className='quiz--btn'>{decodeURIComponent('gg')}</button>
				<button className='quiz--btn'>{decodeURIComponent('gg')}</button>
				<button className='quiz--btn'>{decodeURIComponent('gg')}</button>
				<button className='quiz--btn'>{decodeURIComponent('gg')}</button>
			</div>
			<hr className='quiz--divider'></hr>

		</div>
	);
}
