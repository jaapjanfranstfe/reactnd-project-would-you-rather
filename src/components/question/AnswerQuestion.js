import React, {Component} from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {handleAnswerQuestion} from "../../actions/shared";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class AnswerQuestion extends Component {
    state = {
        selectedOption: null,
    };

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    };

    handleSubmit = (event) => {
        const {authedUser, question, dispatch } = this.props;
        const {selectedOption} = this.state;

        dispatch(handleAnswerQuestion(authedUser, question.id, selectedOption));
    };

    render() {
        const {question, author, classes} = this.props;
        const {selectedOption} = this.state;

        return <Card>
            <Typography>
                {author.name} asks
            </Typography>
            <Avatar
                alt={author.name}
                src={author.avatarURL}
            />
            <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                    aria-label="Answers"
                    name="answers"
                    className={classes.group}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="optionOne" control={<Radio />} label={question.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={question.optionTwo.text} />

                </RadioGroup>
            </FormControl>
            <Button variant="contained" color="primary" disabled={selectedOption === null} onClick={this.handleSubmit}>
                Submit
            </Button>
        </Card>
    }
}

export default connect()(withStyles(styles)(AnswerQuestion));