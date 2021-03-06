import IconButton from "../../../node_modules/@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon";
import Menu from "../../../node_modules/@material-ui/core/Menu/Menu";
import MenuItem from "../../../node_modules/@material-ui/core/MenuItem/MenuItem";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class ProfileMenu extends React.Component {
    state = {
        anchorElement: null
    };

    handleOpenMenu = event => {
        event.preventDefault();
        const target = event.currentTarget;

        this.setState((prevState) => ({
            ...prevState,
            anchorElement: target
        }));
    };

    handleCloseMenu = event => {
        event.preventDefault();

        this.setState((prevState) => ({
            ...prevState,
            anchorElement: null
        }));
    };


    render() {
        const { menuItems, user } = this.props;
        const { anchorElement } = this.state;
        const isProfileMenuOpen = Boolean(anchorElement);

        return <div>
            <Grid container>
                <Grid item>
            <Typography style={{color: '#ffffff'}}>Hi {user}!</Typography>
                </Grid>
                <Grid item>

                <IconButton
                aria-owns={isProfileMenuOpen ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleOpenMenu}
                color="inherit"
            >
                <Icon>account_circle</Icon>
            </IconButton>
                </Grid>
            </Grid>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElement}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isProfileMenuOpen}
                onClose={this.handleCloseMenu}
            >
                {menuItems.map(item =>
                    <MenuItem key={item.label} onClick={item.action}>{item.label}</MenuItem>
                )}
            </Menu>
        </div>
    }
}

export default ProfileMenu