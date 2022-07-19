import React from 'react';
import { useState } from 'react';

function Button({answer, handleClick, selected, answerid}) {

    const style = {
		backgroundColor: 'var(--clr-btn-select)',
		border: 'none'
	}

// const [btnToggle, setBtnToggle] = useState(false);

// function handleClick(e) {
//     console.log(e.target.innerHTML)
//     setBtnToggle(!btnToggle)	
// }

    return (
        <button className='quiz--btn' answerid={answerid} style={selected ? style : {}} onClick={() => handleClick(answerid, selected)}>{answer}</button>
    )
}

export default Button