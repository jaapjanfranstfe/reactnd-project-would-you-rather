import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;
const styles = {
    list: {
        width: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
};

const DrawerMenu = ({ classes, isDrawerOpen, onToggleDrawer, menuItems }) =>
    <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
        }}
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
                            <ListItemIcon><Icon>{menuItem.icon}</Icon></ListItemIcon>
                            <ListItemText primary={menuItem.label} />
                        </ListItem>
                    ))}
                </List>

            </div>
        </div>
    </Drawer>

export default  withStyles(styles)(DrawerMenu)