import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function answerQuestion ( authedUser, qid, answer ) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }

}

export function handleAddQuestion(questionInfo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        questionInfo.author = authedUser;

        dispatch(showLoading());

        return saveQuestion(questionInfo)
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}