import { useState, useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';
import blueCircle from './img/blue-bulb.png';
import yellowCircle from './img/yellow-bulb.png';
import randomizeAnswers from './utils/randomizer';

function App() {
	const [gameStatus, setGameStatus] = useState({ status: 'start', reset: true });
	const [questionDB, setQuestionDB] = useState([]);
	const [categories, setCategories] = useState([]);

	const defaultOptionValue = {
		catID: 9,
		difficulty: 'medium',
		quantity: 5,
	}

	const [formData, setFormData] = useState(defaultOptionValue);
  
	
	useEffect(() => {
		fetch('https://opentdb.com/api_category.php')
			.then((res) => res.json())
			.then((data) => setCategories(data.trivia_categories));
		///add catch error
	}, []);

	function handleChange(event) {
		const { name, value, type, valueAsNumber } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'number' ? valueAsNumber : value,
				//difficulty: name === 'difficulty' ? value : prevFormData.difficulty,
				//catID: name === 'category' ? value : prevFormData.catID,
				//quantity: type === 'number' ? valueAsNumber : prevFormData.quantity,
			};
		});
	}

	useEffect(() => {
		localStorage.removeItem('savedAnswers');
		fetch(
			`https://opentdb.com/api.php?amount=${formData.quantity}&category=${formData.catID}&difficulty=${formData.difficulty}&type=multiple&encode=url3986`
		)
			.then((res) => res.json())
			.then((data) => setQuestionDB(randomizeAnswers(data.results)));
			///add catch error
	}, [gameStatus.reset]);


	//see if i can use a reducer

	function toOptions() {
		setGameStatus((prev) => ({ ...prev, status: 'option' }));
	}

	function toQuiz() {
		setGameStatus((prev) => ({ status: 'quiz', reset: !prev.reset }));		 
	}

	function endGame() {
		gameStatus.status !== 'end' ? setGameStatus((prev) => ({ ...prev, status: 'end' })) : reset();
	}

	function reset() {
		localStorage.removeItem('savedAnswers');
		setGameStatus((prev) => ({ status: 'start', reset: !prev.reset }));
		setFormData(defaultOptionValue)
	}

	return (
		<div className='app'>
			<img className='bulb blue' src={blueCircle} alt='' />
			<img className='bulb yellow' src={yellowCircle} alt='' />
			<main className='app-container'>
				{(gameStatus.status === 'start' || gameStatus.status === 'option') && <Start changeStatus={toQuiz} handleChange={handleChange} formData={formData} categories={categories} toOptions={toOptions}></Start>}
				{(gameStatus.status === 'quiz' || gameStatus.status === 'end') && <Questions questionDB={questionDB} changeStatus={endGame} status={gameStatus.status} formData={formData} />}
			</main>
		</div>
	);
}

export default App;
