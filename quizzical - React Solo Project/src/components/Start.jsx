import React from 'react';
import { nanoid } from 'nanoid';

export default function Start({ changeStatus, handleChange, formData, categories, toOptions }) {
   
	
	const allCategories = categories.map(el => {
		return (
			<option value={el.id} key={nanoid()}>{el.name}</option>
		)
	}) 

	return (
		<div className='start-screen'>
			<h1>Quizzical</h1>
			<p>Challenge yourself with some challenging questions and see how much you can score!</p>
			<button className='start-btn' onClick={toOptions}>
				Set Options
			</button>
		
			<form>
				<label htmlFor='category'>Choose a category:</label>
				<select name='catID' id='category' onChange={handleChange}>
					{allCategories}
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
			<button className='start-btn' onClick={changeStatus}>
				Start Quiz
			</button>
			</form>
		</div>
	);
}
