import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function Answers({ correctAnswer, allAnswers, questionID }) {

    const initialState = allAnswers.map(el => {
        return (
            {
                answer:el,
                questionID: questionID,
                answerID:nanoid(),
                isSelected: false
            }
        )
    })
    console.log('~ initialState', initialState);

    const [answerState, setAnswerState] = useState(initialState)

	const [toggleBtn, setToggleBtn] = useState();

	function handleClick(event, answerID, isSelected) {
		console.log(event);
		console.log(isSelected);
        console.log(answerID);
	}

	const renderBtn = answerState.map((el) => {
		return (
			<button
				className='quiz--btn'
                answerID={el.answerID}
				//style={isSelected ? style : {}}
				onClick={() => handleClick(event, el.answerID, el.isSelected)}
			>
				{decodeURIComponent(el.answer)}
			</button>
		);
	});

	return <>{renderBtn}</>;
}

export default Answers;
