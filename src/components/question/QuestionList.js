
import React from "react";
import QuestionSummary from "./QuestionSummary";

const QuestionList = ({questions, authors}) => (
    questions.sort((questionA, questionB) => {
        return questionB.timestamp - questionA.timestamp;
    }).map(question => (
        <QuestionSummary key={question.id} question={question} author={authors[question.author]}/>
    ))
);


export default QuestionList;