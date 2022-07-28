import { useState, useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';
import blueCircle from './img/blue-bulb.png';
import yellowCircle from './img/yellow-bulb.png';
import randomizeAnswers from './utils/randomizer';

function App() {
	const [gameStatus, setGameStatus] = useState({ status: 'start', reset: true });
	const [questionDB, setQuestionDB] = useState([]);
	const [formData, setFormData] = useState({
		category: '',
		catID: 1,
		difficulty: 'medium',
		quantity: 5,
	});
	
	useEffect(() => {
		fetch('https://opentdb.com/api_category.php')
			.then((res) => res.json())
			.then((data) => setCategories(data.trivia_categories));
		///add catch error
	}, []);

	function handleChange(event) {
        console.log('~ event', event);
		const { name, value, type, valueAsNumber } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				difficulty: name === 'difficulty' ? value : prevFormData.difficulty,
				category: name === 'category' ? value.split(',')[1] : prevFormData.category,
				catID: name === 'category' ? value.split(',')[0] : prevFormData.catID,
				quantity: type === 'number' ? valueAsNumber : prevFormData.quantity,
			};
		});
	}

	useEffect(() => {
		localStorage.removeItem('savedAnswers');
		fetch(
			'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&encode=url3986'
		)
			.then((res) => res.json())
			.then((data) => setQuestionDB(randomizeAnswers(data.results)));
			///add catch error
	}, [gameStatus.reset]);


	//see if i can use a reducer

	function toQuiz() {
		setGameStatus((prev) => ({ ...prev, status: 'quiz' }));
	}

	function endGame() {
		gameStatus.status !== 'end' ? setGameStatus((prev) => ({ ...prev, status: 'end' })) : reset();
	}

	function reset() {
		localStorage.removeItem('savedAnswers');
		setGameStatus((prev) => ({ status: 'start', reset: !prev.reset }));
	}

	return (
		<div className='app'>
			<img className='bulb blue' src={blueCircle} alt='' />
			<img className='bulb yellow' src={yellowCircle} alt='' />
			<main className='app-container'>
				{gameStatus.status === 'start' ? (
					<Start changeStatus={toQuiz} handleChange={handleChange} formData={formData}></Start> 
				) : (
					<Questions questionDB={questionDB} changeStatus={endGame} status={gameStatus.status} />
				)}
			</main>
		</div>
	);
}

export default App;
