import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';
import blueblub from './img/blue-bulb.png';
import yellowblub from './img/yellow-bulb.png';
import randomizeAnswers from './utils/randomizer';

function App() {
	const [start, setStart] = useState(true);
	const [question, setQuestion] = useState([]);

	useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&encode=url3986')
			.then((res) => res.json())
			.then((data) => setQuestion(randomizeAnswers(data.results)));
	}, []);

	return (
		<div className='app'>
			<img className='bulb blue' src={blueblub} alt='' />
			<img className='bulb yellow' src={yellowblub} alt='' />

			<main className='app-container'>{start ? <Questions questionSet={question} /> : <Start startQuiz={() => setStart(!start)} />}</main>
		</div>
	);
}

export default App;
