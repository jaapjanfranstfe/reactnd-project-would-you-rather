import React from 'react';
import {connect} from 'react-redux';
import AnswerQuestion from "./AnswerQuestion";
import QuestionResult from "./QuestionResult";

const Question = ({question, author, user}) => {
console.log(question, author, user);
        const questionIsAnswered = user.answers[question.id] !== undefined;

        if(!questionIsAnswered) {
            return <AnswerQuestion question={question} author={author}/>;
        } else {
            return <QuestionResult question={question} author={author} user={user}/>
        }
};

function mapStateToProps({questions, users, authedUser}, ownProps) {
    const { questionId } = ownProps.match.params;
    const question = questions[questionId];
    const author = users[question.author];
    const authedUserObject = users[authedUser];

    return {
        question,
        author,
        user: authedUserObject
    }
}
export default connect(mapStateToProps)(Question);