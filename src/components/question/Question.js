import React from 'react';
import {connect} from 'react-redux';
import AnswerQuestion from "./AnswerQuestion";
import QuestionResult from "./QuestionResult";
import {Redirect} from "react-router-dom";

const Question = ({question, users, user}) => {
        if(!question) {
            return <Redirect to='/404'  />
        }

        const questionIsAnswered = user.answers[question.id] !== undefined;

        const author = users[question.author];
        if (!questionIsAnswered) {
            return <AnswerQuestion question={question} author={author}/>;
        } else {
            return <QuestionResult question={question} author={author} user={user}/>
        }
};

function mapStateToProps({questions, users, authedUser}, ownProps) {
    const { questionId } = ownProps.match.params;
    const question = questions[questionId];

    const authedUserObject = users[authedUser];

    return {
        question,
        users,
        user: authedUserObject
    }

}
export default connect(mapStateToProps)(Question);