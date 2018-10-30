
import React from "react";
import {Link} from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Typography from '@material-ui/core/Typography/Typography';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Menu from '@material-ui/core/Menu/Menu';
import {connect} from "react-redux";
import {setAuthUser} from "../actions/authedUser";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const menuItems = [
    {
        label: 'Questions',
        path: '/'
    },
    {
        label: 'Leaderboard',
        path: '/leaderboard'
    },
    {
        label: 'Create new question',
        path: '/add'
    }
];

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    }
};

class Navigation extends React.Component {
    state = {
        anchorEl: null,
        isDrawerOpen: false
    };

    toggleDrawer = (isOpen) => () => {
        this.setState((prevState) => ({
            ...prevState,
            isDrawerOpen: isOpen
        }));
    };

    handleProfileMenu = event => {
        this.setState((prevState) => ({
            ...prevState,
            anchorEl: event.currentTarget
        }));
    };

    handleLogout = () => {
        this.setState((prevState) => ({
            ...prevState,
            anchorEl: null
        }));

        this.props.dispatch(setAuthUser(null));
    };

    render() {
        const {classes, authedUser, title} = this.props;
        const { anchorEl, isDrawerOpen} = this.state;
        const isProfileMenuOpen = Boolean(anchorEl);

        const drawerMenuList = (
            <div className={classes.list}>
                <List>
                    {menuItems.map((menuItem) => (
                        <ListItem button key={menuItem.label} component={Link} to={menuItem.path}>
                            <ListItemIcon><Icon>menu</Icon></ListItemIcon>
                            <ListItemText primary={menuItem.label} />
                        </ListItem>
                    ))}
                </List>

            </div>
        );

        return <AppBar position="static">
            <Toolbar>
                {authedUser &&
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                        <Icon>menu</Icon>
                    </IconButton>
                }

                <Typography variant="h6" color="inherit" className={classes.grow}>
                    {title}
                </Typography>

                {authedUser &&
                    <div>
                        <IconButton
                            aria-owns={isProfileMenuOpen ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleProfileMenu}
                            color="inherit"
                        >
                            <Icon>account_circle</Icon>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isProfileMenuOpen}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                }
            </Toolbar>
            <SwipeableDrawer
                open={isDrawerOpen}
                onClose={this.toggleDrawer(false)}
                onOpen={this.toggleDrawer(true)}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                >
                    {drawerMenuList}
                </div>
            </SwipeableDrawer>
        </AppBar>
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    }
}
export default connect(mapStateToProps)(withStyles(styles)(Navigation))

