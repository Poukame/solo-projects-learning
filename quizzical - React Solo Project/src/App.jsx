import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import blueblub from './img/blue-bulb.png';
import yellowblub from './img/yellow-bulb.png';
import './App.css';
import { nanoid } from 'nanoid'

function App() {

	const [start, setStart] = useState(true);
	const [question, setQuestion] = useState([]);


	useEffect(() => {
		
		fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&encode=url3986')
			.then((res) => res.json())
			.then((data) => setQuestion(randomizeAnswers(data.results)))
		
	}, []);

	function randomizeAnswers (question) {
        return question.map(question => ({
            ...question,
            allAnswers: shuffle(question.incorrect_answers.concat(question.correct_answer)),
        }));
    }
	
	//shuffle function
	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
		return array;
	}	
		
		const allQuestion = question.map((items, index) => {
			return (
		<Quiz 	
			question={items.question}
			answers={items.allAnswers}
			correct={items.correct_answer}
			questionId={nanoid()}
			// handleClick={(e) => handleClick(e)}
			// selected={btnToggle}
			/>
		)})



	return (
		<div className='app'>
			<img className='bulb blue' src={blueblub} alt='' />
			<img className='bulb yellow' src={yellowblub} alt='' />
			
			<main className='app-container'>{start ? allQuestion : <Start startQuiz={() => setStart(!start)} />}</main>		
		</div>
	);
}

export default App;

