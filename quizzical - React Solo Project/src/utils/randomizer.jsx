import shuffle from './shuffle'

function randomizeAnswers(question) {
    return question.map((question) => ({
        ...question,
        allAnswers: shuffle([...question.incorrect_answers, question.correct_answer]),
    }));
}

export default randomizeAnswers