import React, {Component} from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography/Typography';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {handleAddQuestion} from "../../actions/questions";
import {withRouter} from "react-router-dom";

const styles = theme => ({
    input: {
        margin: theme.spacing.unit,
    },
});

class AddQuestion extends Component {

    state = {
        optionOneText: null,
        optionTwoText: null
    };

    handleChange = (event) => {
        event.preventDefault();
        const targetId = event.target.id;
        const targetValue = event.target.value;

        this.setState((prevState) => {
            return {
                ...prevState,
                [targetId]: targetValue
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch, history } = this.props;
        const { optionOneText, optionTwoText} = this.state;

        dispatch(handleAddQuestion({
            optionOneText,
            optionTwoText
        }));


        history.push('/');
    };
    render() {
        const { classes } = this.props;
        const { optionOneText, optionTwoText } = this.state;

        return <Card>
                    <CardContent>
                        <Typography>Create new question</Typography>
                        <Typography>Complete the question</Typography>
                        <Typography>Would you rather</Typography>
                        <Input
                            id="optionOneText"
                            onChange={this.handleChange}
                            placeholder="Enter option 1 text here"
                            className={classes.input}
                            inputProps={{
                                'aria-label': 'optionOneText',
                            }}
                        />
                        <Input
                            id="optionTwoText"
                            onChange={this.handleChange}
                            placeholder="Enter option 2 text here"
                            className={classes.input}
                            inputProps={{
                                'aria-label': 'optionTwoText',
                            }}
                        />
                        <Button variant="contained" color="primary" disabled={!Boolean(optionOneText) || !Boolean(optionTwoText)} onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </CardContent>
            </Card>
    }
};

export default connect()(withRouter((withStyles(styles)(AddQuestion))));
