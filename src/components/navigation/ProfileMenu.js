import IconButton from "../../../node_modules/@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon";
import Menu from "../../../node_modules/@material-ui/core/Menu/Menu";
import MenuItem from "../../../node_modules/@material-ui/core/MenuItem/MenuItem";
import React from "react";

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
        const { menuItems } = this.props;
        const { anchorElement } = this.state;
        const isProfileMenuOpen = Boolean(anchorElement);

        return <div>
            <IconButton
                aria-owns={isProfileMenuOpen ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleOpenMenu}
                color="inherit"
            >
                <Icon>account_circle</Icon>
            </IconButton>
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