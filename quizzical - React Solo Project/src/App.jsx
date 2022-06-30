import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import blueblub from './img/blue-bulb.png';
import yellowblub from './img/yellow-bulb.png';
import { decode } from 'html-entities';
import './App.css';

decode('&lt; &gt; &quot; &apos; &amp; &#169; &#8710; &#O39');

function App() {
	const [start, setStart] = useState(true);
	const [question, setQuestion] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple', {
			signal: controller.signal,
		})
			.then((res) => res.json())
			.then((data) => setQuestion(data.results));
		return () => controller.abort();
	}, []);

	const createArrayAllAnswers = question.map((items) => {
		return [...items.incorrect_answers, items.correct_answer];
	});

	function shuffle(array) {
		array.forEach((array) => {
			let currentIndex = array.length,
				randomIndex;

			while (currentIndex != 0) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex--;

				[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
			}
		});
		console.log('array', array);
		return array;
	}

	const allQuestion = question.map((items, index) => {
		const shuffled = shuffle(createArrayAllAnswers);
		return <Quiz question={items.question} answers={shuffled[index]} />;
	});

	return (
		<div className='app'>
			<img className='bulb blue' src={blueblub} alt='' />
			<img className='bulb yellow' src={yellowblub} alt='' />

			<main className='app-container'>{start ? allQuestion : <Start startQuiz={() => setStart(!start)} />}</main>
		</div>
	);
}

export default App;
