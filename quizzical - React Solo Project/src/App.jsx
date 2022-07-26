import { useState } from 'react';
import { useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';
import blueCircle from './img/blue-bulb.png';
import yellowCircle from './img/yellow-bulb.png';
import randomizeAnswers from './utils/randomizer';

function App() {
	const [gameStatus, setGameStatus] = useState({status: 'splash'});
	const [questionDB, setQuestionDB] = useState([]);


	useEffect(() => {
		fetch(
			'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&encode=url3986'
		)
			.then((res) => res.json())
			.then((data) => setQuestionDB(randomizeAnswers(data.results)));
	}, []);

	function toQuiz() {
		setGameStatus({status: 'quiz'})
	}

	function endGame() {
		(gameStatus.status !== 'end') ? setGameStatus({status: 'end'}) : reset() ;
	}

	function reset() {
		localStorage.removeItem('savedAnswers')
		setGameStatus({status: 'splash'})
	}

	return (
		<div className='app'>
			<img className='bulb blue' src={blueCircle} alt='' />
			<img className='bulb yellow' src={yellowCircle} alt='' />
			<main className='app-container'>
				{gameStatus.status === 'splash' ? (
					<Start changeStatus={toQuiz} />
				) : (
					<Questions questionDB={questionDB} changeStatus={endGame} status={gameStatus.status}/>
				)}
			</main>
		</div>
	);
}

export default App;
