import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    const { id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props;

    return (
        <div>
        <div className={`card ${id}`}>
            <img className='card__img' src={imageUrl} alt='' />
            <div className='card__data'>
                <div className='card__location'>
                    <FontAwesomeIcon icon={faLocationDot} className='card__icon' />
                    <span className='card__location--country'>{location}</span>
                    <a href={googleMapsUrl} className='card__location--link' target='_blank' rel='noreferrer'>
                        View on Google Maps
                    </a>
                </div>
                <h2 className='card__title'>{title}</h2>
                <p className='card__date'>
                    {startDate} / {endDate}
                </p>
                <p className='card__copy'>{description}</p>
            </div>
            </div>
            <hr />
        </div>
    );
}
