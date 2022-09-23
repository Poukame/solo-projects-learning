import shuffle from './shuffle'
import { IQuestionDB } from '../Interface'

function randomizeAnswers(question:IQuestionDB) {
    return question.map((question) => ({
        ...question,
        allAnswers: shuffle([...question.incorrect_answers, question.correct_answer]),
    }));
}

export default randomizeAnswers