import React from 'react';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';

export default function Contact() {
    return (
        <div className='button-wrapper'>
            <button className='btn btn-email'>
                <img className='btn-icon' src={email} alt='github icon' />
                Email
            </button>
            <button className='btn btn-linkedin'><img className='btn-icon' src={linkedin} alt='github icon' />LinkedIn</button>
        </div>
    );
}
