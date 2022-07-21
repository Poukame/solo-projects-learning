import React from 'react';
import { useState } from 'react';
import Button from './Button';
import { nanoid } from 'nanoid'

function Answers({ answer, correctAnswer }) {

            
    const [toggleBtn, setToggleBtn] = useState([{answerID: '123456', isSelected:false}])

    function handleClick(answerID, isSelected) {
        console.log(answerID)
        console.log(isSelected)
    }

	return (
		<>
			<Button 
            answerID={nanoid()} 
            answer={answer} 
            correctAnswer={correctAnswer} 
            isSelected={toggleBtn}
            handleClick={(answerID, isSelected) => handleClick(answerID, isSelected)}
             />
		</>
	);
}

export default Answers;
