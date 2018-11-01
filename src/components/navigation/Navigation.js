
import React, {Fragment} from "react";
import {connect} from "react-redux";
import {setAuthUser} from "../../actions/authedUser";
import DrawerMenu from './DrawerMenu';
import ProfileMenu from "./ProfileMenu";
import ApplicationNavBar from "./ApplicationNavBar";
import {withRouter} from "react-router-dom";

class Navigation extends React.Component {

    handleLogout = () => {
        this.props.dispatch(setAuthUser(null));
        this.props.history.push('/');
    };

    render() {
        const drawerMenuItems = [
            {
                label: 'Questions',
                icon: 'question_answer',
                path: '/'
            },
            {
                label: 'Leaderboard',
                icon: 'people',
                path: '/leaderboard'
            },
            {
                label: 'New question',
                icon: 'add_circle',
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

        return <Fragment>
                    <ApplicationNavBar showMenus={authedUser} title={title}>
                        {authedUser &&
                            <ProfileMenu menuItems={profileMenuItems} user={authedUser}/>
                        }
                    </ApplicationNavBar>
                    <DrawerMenu menuItems={drawerMenuItems} />
               </Fragment>

    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(withRouter(Navigation))

