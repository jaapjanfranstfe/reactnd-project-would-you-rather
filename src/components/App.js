import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Login from './Login'
import Leaderboard from "./leaderboard/Leaderboard";
import Grid from '@material-ui/core/Grid'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import PrivateRoute from "./PrivateRoute";
import NoMatch from "./NoMatch";
import Navigation from "./navigation/Navigation";
import QuestionTabs from "./question/QuestionTabs";
import Question from "./question/Question";
import AddQuestion from "./question/AddQuestion";
import {withStyles} from "@material-ui/core";
import {LoadingBar} from "react-redux-loading";

const styles = theme =>  ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar
});

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const theme = createMuiTheme({
            typography: {
                useNextVariants: true,
            },
        });

        const { classes } = this.props;

        return (
            <Fragment>

                <CssBaseline/>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <Grid container>

                                <Navigation title="Would you rather?"/>
                                <main className={classes.content}>
                                    <div className={classes.toolbar}/>
                                    <LoadingBar/>
                                    <Switch>
                                        <Route path='/login' exact component={ Login }/>
                                        <PrivateRoute path='/' exact component={ QuestionTabs }/>
                                        <PrivateRoute path='/leaderboard' exact component={ Leaderboard }/>
                                        <PrivateRoute path='/questions/:questionId' exact component={ Question }/>
                                        <PrivateRoute path='/add' exact component={ AddQuestion }/>
                                        <PrivateRoute component={NoMatch} />
                                    </Switch>
                                </main>

                        </Grid>
                    </MuiThemeProvider>
                </Router>
            </Fragment>
        )
    }
}

export default connect()(withStyles(styles)(App))