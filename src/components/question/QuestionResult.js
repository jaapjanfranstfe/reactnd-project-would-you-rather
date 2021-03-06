import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import QuestionResultAnswer from "./QuestionResultAnswer";

const QuestionResult = ({question, author, user}) => (
    <Card>
        <Typography>
            {author.name} asks
        </Typography>
        <Avatar
            alt={author.name}
            src={author.avatarURL}
        />
        <Typography>
            Results
        </Typography>
        <QuestionResultAnswer question={question} optionId="optionOne" user={user}/>
        <QuestionResultAnswer question={question} optionId="optionTwo" user={user}/>

    </Card>
);

export default QuestionResult;