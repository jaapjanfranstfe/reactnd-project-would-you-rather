export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'

export function setAuthUser (id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function userAnswerQuestion (userId, qid) {
    return {
        type: USER_ANSWER_QUESTION,
        userId,
        qid
    }
}