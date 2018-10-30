
import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

const QuestionSummary = ({question, author}) => (
    <Card>
        <Typography>
            {author.name} says...
        </Typography>
        <Avatar
            alt={author.name}
            src={author.avatarURL}
        />
        <Typography>
            ...{question.optionOne.text.substring(0, 15)}...
        </Typography>
        <Button variant="contained" color="primary" component={Link} to={`/questions/${question.id}`}>
            View question
        </Button>
    </Card>
);


export default QuestionSummary;