import React from "react";


export default function Start(props) {

    return (
        <div className="start-screen">

        <h1>Quizzical</h1>
        <p>Some description here</p>
        <button className='start-btn' onClick={props.startQuiz}>Start Quiz</button>

        </div>

    )
}