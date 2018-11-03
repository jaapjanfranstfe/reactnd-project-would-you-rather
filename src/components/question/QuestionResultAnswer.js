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
    const currentOptionVotes = question[optionId].votes.length;
    const percentage = Math.round((100 * currentOptionVotes) / totalVotes);

console.log('USER', user.answers[question.id])
    return <div className={classes.root}>
        <Typography>
            {question[optionId].text}
        </Typography>
        {user.answers[question.id] === optionId &&
            <Typography variant="h6">
                YOUR PICK
            </Typography>
        }

        <LinearProgress variant="determinate" value={percentage}/>
        <Typography>
            {currentOptionVotes} out of {totalVotes} votes
        </Typography>
    </div>
};

export default withStyles(styles)(QuestionResultAnswer);