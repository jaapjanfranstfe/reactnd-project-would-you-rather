export const RECEIVE_USERS = 'RECEIVE_USER';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function userAnswerQuestion (userId, qid) {
    return {
        type: USER_ANSWER_QUESTION,
        userId,
        qid
    }
}