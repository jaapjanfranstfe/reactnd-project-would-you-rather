import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    list: {
        width: 250,
    }
};

const DrawerMenu = ({ classes, isDrawerOpen, onToggleDrawer, menuItems }) =>
    <SwipeableDrawer
        open={isDrawerOpen}
        onClose={onToggleDrawer(false)}
        onOpen={onToggleDrawer(true)}>
        <div
            tabIndex={0}
            role="button"
            onClick={onToggleDrawer(false)}
            onKeyDown={onToggleDrawer(false)}>
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
        </div>
    </SwipeableDrawer>

export default  withStyles(styles)(DrawerMenu)