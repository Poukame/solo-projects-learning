import React from 'react';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { IoWarningSharp } from 'react-icons/io5';
import { MdDangerous } from 'react-icons/md';

function Banner({ children, status = 'error' }) {
	// status: success, warning, error, neutral

	let icon = '';
	let title = '';

	if (status === 'success') {
		icon = <FaCheckCircle />;
		title = 'Congratulations';
	}
	if (status === 'warning') {
		icon = <IoWarningSharp />;
		title = 'Attention';
	}
	if (status === 'error') {
		icon = <MdDangerous />;
		title = 'There is a problem';
	}
	if (status === 'neutral') {
		icon = <FaInfoCircle />;
		title = 'Update avaiable';
	}


	return (
		<div className={`banner-container banner-${status}`}>
			{icon}
			<div>
				<h2 className={`banner-title banner-title-${status}`}>{title}</h2>
				{children && <p className={`banner-text banner-text-${status}`}>{children}</p>}
			</div>
		</div>
	);
}

export default Banner;
