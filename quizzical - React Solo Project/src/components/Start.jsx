import React from 'react';
import { useState, useEffect } from 'react';

export default function Start({ changeStatus, handleChange, formData }) {
	const [categories, setCategories] = useState([]);
    console.log('~ formData', formData);

	return (
		<div className='start-screen'>
			<h1>Quizzical</h1>
			<p>Challenge yourself with some challenging questions and see how much you can score!</p>
			<button className='start-btn' onClick={changeStatus}>
				Start Quiz
			</button>

			<form>
				<label htmlFor='category'>Choose a category:</label>
				<select name='category' id='category' onChange={handleChange}>
					<option value='1,Volvo'>Volvo</option>
					<option value='2,Sabb'>Saab</option>
					<option value='3,Mercedes'>Mercedes</option>
					<option value='4,Audi' >Audi</option>
				</select>

				<label htmlFor='difficulty'>Choose a difficulty:</label>
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

				<label htmlFor='quantity'>How many questions? (between 3 and 10):</label>
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
