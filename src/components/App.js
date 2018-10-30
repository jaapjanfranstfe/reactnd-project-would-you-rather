import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Login from './Login'
import Leaderboard from "./Leaderboard";
import Grid from '@material-ui/core/Grid'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import PrivateRoute from "./PrivateRoute";

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

        return (
            <Fragment>
                <CssBaseline/>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Route path='/login' exact component={ Login }/>
                                <PrivateRoute path='/leaderboard' exact component={ Leaderboard }/>
                            </Grid>
                        </Grid>
                    </MuiThemeProvider>
                </Router>
            </Fragment>
        )
    }
}

export default connect()(App)