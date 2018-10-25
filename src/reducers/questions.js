import {RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION} from "../actions/questions";
import cloneDeep from 'lodash/cloneDeep';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ANSWER_QUESTION:
            const {authedUser, qid, answer} = action;
            const clonedQuestion = cloneDeep(state[qid]);

            clonedQuestion[answer].votes = clonedQuestion[answer].votes.concat(authedUser);

            return {
                ...state,
                [qid]: clonedQuestion
            };
        case ADD_QUESTION:
            const { question } = action;

            return {
                ...state,
                [question.id]: question
            };
        default:
            return state;
    }
}