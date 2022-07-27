import { useState, useEffect } from 'react';
import App from '../App';

export default function Options() {

    const [categories, setCategories] = useState([])
    console.log('~ category', categories);

    useEffect(() => {
		fetch(
			'https://opentdb.com/api_category.php'
		)
			.then((res) => res.json())
			.then((data) => setCategories(data.trivia_categories));
			///add catch error
	}, []);

    return (
        <>
        </>
    )
}