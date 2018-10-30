

import {RECEIVE_USERS, USER_ANSWER_QUESTION} from "../actions/users";
import cloneDeep from "lodash/cloneDeep";

export default function users (state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case USER_ANSWER_QUESTION:
            const { userId, qid, answer } = action;
            const clonedUser = cloneDeep(state[userId]);

            clonedUser.answers[qid] = answer;

            return {
                ...state,
                [userId]: clonedUser
            };
        default:
            return state;
    }
}