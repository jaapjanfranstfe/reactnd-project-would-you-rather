import {Component} from "react";
import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography/Typography';
import Paper from '@material-ui/core/Paper/Paper';
import {withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import QuestionList from "./QuestionList";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class QuestionTabs extends Component {
    state = {
        selectedTabIndex: 0,
    };

    handleChange = (event, selectedTabIndex) => {
        this.setState({ selectedTabIndex });
    };




    render() {
        const { selectedTabIndex } = this.state;
        const { questions, authedUser, users } = this.props;
        const authedUserObject = users[authedUser];
        const questionsArray = Object.values(questions);

        return <Grid container justify='center'>
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Paper>
                <Tabs
                    value={selectedTabIndex}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="unanswered" />
                    <Tab label="Answered" />
                </Tabs>
                {selectedTabIndex === 0 &&
                    <TabContainer>
                        <QuestionList questions={questionsArray.filter(question => authedUserObject.answers[question.id] === undefined)} authors={users}/>
                    </TabContainer>}
                {selectedTabIndex === 1 &&
                <TabContainer>
                    <QuestionList questions={questionsArray.filter(question => authedUserObject.answers[question.id] !== undefined)} authors={users}/>
                </TabContainer>}
                    </Paper>
                </Grid>
            </Grid>;
    }
}

function mapStateToProps({questions, users, authedUser}) {
    return {
        questions,
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(QuestionTabs));