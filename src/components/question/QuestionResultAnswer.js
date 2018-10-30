import React from 'react';
import {withStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';

const styles = () => ({
    root: {
        flexGrow: 1,
    },
});

const QuestionResultAnswer = ({question, optionId, user, classes}) => {
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const percentage = Math.round(100 * question[optionId].votes.length / totalVotes);


    return <div className={classes.root}>
        <Typography>
            {question[optionId].text}
        </Typography>
        {user.answers[question.id] === optionId &&
            <Typography>
                YOUR PICK
            </Typography>
        }

        <LinearProgress variant="determinate" value={percentage}/>
    </div>
};

export default withStyles(styles)(QuestionResultAnswer);