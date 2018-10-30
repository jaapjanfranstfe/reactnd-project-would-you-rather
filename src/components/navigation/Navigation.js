
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {setAuthUser} from "../../actions/authedUser";
import DrawerMenu from './DrawerMenu';
import ProfileMenu from "./ProfileMenu";
import ApplicationNavBar from "./ApplicationNavBar";
import {withRouter} from "react-router-dom";

class Navigation extends React.Component {

    state = {
        isDrawerOpen: false
    };

    toggleDrawer = (isOpen) => () => {
        this.setState({
            isDrawerOpen: isOpen
        });
    };

    handleLogout = () => {
        this.props.dispatch(setAuthUser(null));
        this.props.history.push('/');
    };

    render() {
        const drawerMenuItems = [
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

        const profileMenuItems = [
            {
                label: 'Logout',
                action: this.handleLogout
            }
        ];

        const { authedUser, title} = this.props;
        const { isDrawerOpen } = this.state;



        return <Fragment>
                    <ApplicationNavBar showMenus={authedUser} onClickMenuIcon={this.toggleDrawer} title={title}>
                        {authedUser &&
                            <ProfileMenu menuItems={profileMenuItems}/>
                        }
                    </ApplicationNavBar>
                    <DrawerMenu isDrawerOpen={isDrawerOpen} onToggleDrawer={this.toggleDrawer} menuItems={drawerMenuItems} />
               </Fragment>

    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(withRouter(Navigation))

