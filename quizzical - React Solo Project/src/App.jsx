import { useState, useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';
import blueCircle from './img/blue-bulb.png';
import yellowCircle from './img/yellow-bulb.png';
import randomizeAnswers from './utils/randomizer';

function App() {
	const [gameStatus, setGameStatus] = useState({ status: 'start', reset: true, error: false });
	const [questionDB, setQuestionDB] = useState([]);
	const [categories, setCategories] = useState([]);
	const [spinner, setSpinner] = useState(false);

	const defaultOptionValue = {
		catID: 9,
		difficulty: 'medium',
		quantity: 5,
		minQuestion: 3,
		maxQuestion: 10,
	};

	const { minQuestion, maxQuestion } = defaultOptionValue;
	const [formData, setFormData] = useState(defaultOptionValue);

	useEffect(() => {
		fetch('https://opentdb.com/api_category.php')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error('error');
			})
			.then((data) => setCategories(data.trivia_categories))
			.catch(() => setGameStatus((prev) => ({ ...prev, error: true })));
	}, []);

	function handleChange(event) {
		const { name, value, type, valueAsNumber } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'number' ? valueAsNumber : value,
			};
		});
	}

	function handlePlus() {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				quantity: prevFormData.quantity + 1 > maxQuestion ? maxQuestion : prevFormData.quantity + 1,
			};
		});
	}

	function handleMinus() {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				quantity: prevFormData.quantity - 1 < minQuestion ? minQuestion : prevFormData.quantity - 1,
			};
		});
	}

	useEffect(() => {
		localStorage.removeItem('savedAnswers');
		if (gameStatus.status !== 'start') {
			setSpinner(true);
			fetch(
				`https://opentdb.com/api.php?amount=${formData.quantity}&category=${formData.catID}&difficulty=${formData.difficulty}&type=multiple&encode=url3986`
			)
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
					throw new Error('error');
				})
				.then((data) => setQuestionDB(randomizeAnswers(data.results)))
				.then(() => setGameStatus((prev) => ({ ...prev, status: 'quiz' })))
				.then(() => setSpinner(false))
				.catch(() => {
					setGameStatus((prev) => ({ ...prev, error: true }));
					setSpinner(false);
				});
		}
	}, [gameStatus.reset]);


	function toOptions() {
		setGameStatus((prev) => ({ ...prev, status: 'option' }));
	}

	function toQuiz(event) {
		event.preventDefault();
		setGameStatus((prev) => ({ ...prev, reset: !prev.reset }));
	}

	function endGame() {
		gameStatus.status !== 'end' ? setGameStatus((prev) => ({ ...prev, status: 'end' })) : reset();
	}

	function reset() {
		localStorage.removeItem('savedAnswers');
		setGameStatus((prev) => ({ status: 'start', reset: !prev.reset }));
		setFormData(defaultOptionValue);
	}

	return (
		<div className='app'>
			<img className='bulb blue' src={blueCircle} alt='' />
			<img className='bulb yellow' src={yellowCircle} alt='' />
			<main className='app-container'>
				{(gameStatus.status === 'start' || gameStatus.status === 'option') && (
					<Start
						changeStatus={toQuiz}
						handleChange={handleChange}
						formData={formData}
						categories={categories}
						toOptions={toOptions}
						status={gameStatus}
						handlePlus={handlePlus}
						handleMinus={handleMinus}
						minQuestion={minQuestion}
						maxQuestion={maxQuestion}
						spinner={spinner}
					></Start>
				)}
				{(gameStatus.status === 'quiz' || gameStatus.status === 'end') && (
					<Questions
						questionDB={questionDB}
						changeStatus={endGame}
						status={gameStatus.status}
						formData={formData}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
