import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { nanoid } from 'nanoid'


export default function Quiz(props) {
	const {question, answers, correct, questionId} = props;
	const [btnToggle, setBtnToggle] = useState([]);


	const allButtons = answers.map((el, index) => {
	return (
		<Button
			answer={decodeURIComponent(el)}
			handleClick={(answerid, selected) => handleClick(answerid, selected)}
			//selected={btnToggle.on}
			answerid={nanoid()}
		/>
	)})

	function handleClick(answerid, selected) {
		console.log(selected)
		console.log(answerid)
		console.log('cliked')
		setBtnToggle(prevState => {

			//console.log('find', prevState.find(v => v.answerid === answerid))
			
			if(btnToggle.length < 1) {
				return ['A', 'B']
				
				// [{	
				// 		answerid: answerid,
				// 		on: prevState.on
				// 		}]
				
			} else {
				return []
			}

		})
		console.log(btnToggle)
		}	
		

	return (
		<div className={`quiz-container question${questionId}`}>
			<h2 className='quiz__question'>{decodeURIComponent(question)}</h2>
			<div className='quiz__btn-wrapper'>
				{allButtons}
			</div>
			<hr className='quiz--divider'></hr>
		</div>
	);
}
