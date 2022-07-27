import React from "react";


export default function Start({ changeStatus }) {

    return (
        <div className="start-screen">

        <h1>Quizzical</h1>
        <p>Some description here</p>
        <button className='start-btn' onClick={changeStatus}>Start Quiz</button>

        </div>

    )
}