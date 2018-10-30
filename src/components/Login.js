import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthUser } from "../actions/authedUser";
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class Login extends Component {
    state = {
        selectedUser: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch, history } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const {selectedUser } = this.state;

        if(selectedUser && selectedUser !== '') {
            dispatch(setAuthUser(selectedUser));


            this.setState(() => ({
                selectedUser: ''
            }));

            history.push(from);
        }
    };

    render() {
        const { users } = this.props;
        const { selectedUser } = this.state;

        return <Grid container justify='center'>
                <Grid item xs={12} md={10} lg={8} xl={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h3" gutterBottom>
                                Welcome to 'Would you rather'!
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Please select a user
                            </Typography>

                            <form autoComplete="off">
                                <FormControl>
                                    <InputLabel htmlFor="selectedUser">User</InputLabel>
                                    <Select
                                        value={this.state.selectedUser}
                                        onChange={this.handleChange}
                                        inputProps={{
                                            name: 'selectedUser',
                                            id: 'selectedUser'
                                        }}
                                    >
                                        { users.map(user =>
                                            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                <Button variant="contained" disabled={selectedUser === ''} color="primary" onClick={this.handleSubmit}>
                                    Login
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users).sort((a,b) => a.name.localeCompare(b.name)),
    }
}

export default connect(mapStateToProps)(withRouter(Login))