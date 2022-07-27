import React from 'react';
import { useState, useEffect } from 'react';

export default function Start({ changeStatus }) {
	const [categories, setCategories] = useState([]);
	const [formData, setFormData] = useState({
		category: '',
		catID: 9,
		difficulty: 'medium',
		quantity: 5,
	});
	console.log('~ formData', formData);

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
				[name]: name === 'category' ? event.target.firstChild.innerHTML : value,
				catID: name === 'category' ? value : prevFormData.catID,
				quantity: type === 'number' ? valueAsNumber : prevFormData.quantity,
			};
		});
	}

	return (
		<div className='start-screen'>
			<h1>Quizzical</h1>
			<p>Challenge yourself with some challenging questions and see how much you can score!</p>
			<button className='start-btn' onClick={changeStatus}>
				Start Quiz
			</button>
			<form>
				<label for='categories'>Choose a category:</label>
				<select name='category' id='categories' onChange={handleChange} value={formData.category}>
					<option value='1'>Volvo</option>
					<option value='2'>Saab</option>
					<option value='3'>Mercedes</option>
					<option value='4'>Audi</option>
				</select>
				<label for='difficulty'>Choose a difficulty:</label>
				<select
					name='difficulty'
					id='difficulty'
					onChange={handleChange}
					value={formData.difficulty}
				>
					<option value='easy'>Easy</option>
					<option value='medium'>Medium</option>
					<option value='hard'>Hard</option>
				</select>
				<label for='quantity'>How many questions? (between 3 and 10):</label>
				<input
					type='number'
					id='quantity'
					name='quantity'
					min='3'
					max='10'
					value={formData.quantity}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
