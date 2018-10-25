import {getInitialData, saveQuestionAnswer} from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions, answerQuestion} from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';
import {userAnswerQuestion} from "./authedUser";

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            })
    }
}

export function handleAnswerQuestion() {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() => dispatch(answerQuestion(authedUser, qid, answer)))
            .then(() => dispatch(userAnswerQuestion(authedUser, qid)))
            .then(() => dispatch(hideLoading()))
    }
}