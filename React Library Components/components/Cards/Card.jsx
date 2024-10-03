import { cloneElement } from 'react';
import { FaQuestion } from 'react-icons/fa';

function Card({ children, icon = <FaQuestion />, boxColor = '#1C51B9', iconColor = 'white' }) {
	return (
		<div className='card-container' style={{ '--bg-color': boxColor }}>
			<div className='icon-box' style={{ '--icon-color': iconColor }}>
				{cloneElement(icon, { className: 'card-icon' })}
			</div>
			<div className='card-details'>{children}</div>
		</div>
	);
}

export default Card;
