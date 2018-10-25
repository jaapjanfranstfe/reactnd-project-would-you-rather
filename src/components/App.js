import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import Login from './Login'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
              <Route path='/login' exact component={ Login }/>
            </Router>
        )
    }
}

export default connect()(App)