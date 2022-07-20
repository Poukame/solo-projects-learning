import React from 'react';
import Button from './Button';

function Answers({ answerID, answer, correctAnswer, isSelected, allAnswers }) {

	// const renderBtn = allAnswers.map((el) => {
	// 	return <Button answerID={answerID} answer={answer} correctAnswer={correctAnswer} isSelected={false} />;
	// });

	return (
		<>
			<Button 
            answerID={answerID} 
            answer={answer} 
            correctAnswer={correctAnswer} 
            isSelected={false} />
		</>
	);
}

export default Answers;
