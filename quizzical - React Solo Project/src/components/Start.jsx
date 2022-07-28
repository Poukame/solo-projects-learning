import React from 'react';
import { nanoid } from 'nanoid';

export default function Start({
	changeStatus,
	handleChange,
	formData,
	categories,
	toOptions,
	status,
	handlePlus,
	handleMinus,
	minQuestion,
	maxQuestion
}) {
	const allCategories = categories.map((el) => {
		return (
			<option value={el.id} key={nanoid()}>
				{el.name}
			</option>
		);
	});

	return (
		<div className='start-screen'>
			{status === 'start' && (
				<>
					<h1>Quizzical</h1>
					<p>Challenge yourself with some questions and see how much you can score!</p>
					<button className='start-btn' onClick={toOptions}>
						Set Options
					</button>
				</>
			)}
			{status === 'option' && (
				<>
					<h1>Select Your Options</h1>
					<form onSubmit={changeStatus}>
						
						<label htmlFor='category'><h2>Choose a category:</h2></label>
						<div>
						<select name='catID' id='category' onChange={handleChange} className='form-field minimal'> 
							{allCategories}
						</select>
						</div>

						<label htmlFor='difficulty'><h2>Choose a difficulty:</h2></label>
						<select
							name='difficulty'
							id='difficulty'
							onChange={handleChange}
							value={formData.difficulty}
							className='form-field minimal'
						>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</select>
						
						<label htmlFor='quantity'><h2>How many questions? (between {minQuestion} and {maxQuestion}):</h2></label>
						<div className="wrapper">
 						 <button  type="button" className="plusminus" onClick={handleMinus}>-</button>
						<input
							type='number'
							id='quantity'
							name='quantity'
							min='3'
							max='10'
							value={formData.quantity}
							onChange={handleChange}
							className='form-field num'
							readOnly
						/>
						  <button  type="button" className="plusminus" onClick={handlePlus}>+</button>
						</div>
						<button className='start-btn'>Start Quiz</button>
					</form>
				</>
			)}
		</div>
	);
}
