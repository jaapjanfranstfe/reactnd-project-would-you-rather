import Toolbar from "../../../node_modules/@material-ui/core/Toolbar/Toolbar";
import IconButton from "../../../node_modules/@material-ui/core/IconButton/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "../../../node_modules/@material-ui/core/Typography/Typography";
import AppBar from "../../../node_modules/@material-ui/core/AppBar/AppBar";
import React from "react";
import {withStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

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
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
};

const ApplicationNavBar = ({ showMenus,onClickMenuIcon, title, children, classes }) =>

<AppBar  position="fixed" className={classes.appBar}>
    <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
        </Typography>

        {children}

    </Toolbar>
</AppBar>;

export default withStyles(styles)(ApplicationNavBar);