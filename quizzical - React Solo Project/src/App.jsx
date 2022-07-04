import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import blueblub from './img/blue-bulb.png';
import yellowblub from './img/yellow-bulb.png';
import './App.css';

function App() {

	const [start, setStart] = useState(true);
	const [question, setQuestion] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&encode=url3986', {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then((data) => setQuestion(data.results))
		return () => controller.abort();
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

	function renderQuestion() {
		const allQuestion = randomizeAnswers(question)
		console.log(allQuestion);
		allQuestion.map((items) => {
		return <Quiz question={items.question} answers={items.question}/>});
	}

	return (
		<div className='app'>
			<img className='bulb blue' src={blueblub} alt='' />
			<img className='bulb yellow' src={yellowblub} alt='' />
			
			<main className='app-container'>{start ? <Quiz /> : <Start startQuiz={() => setStart(!start)} />}</main>		
		</div>
	);
}

export default App;

