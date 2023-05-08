import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography, Grid, Hidden, List, SwipeableDrawer, IconButton, Divider, ListItem, Tooltip, useMediaQuery, ListItemText, ListItemIcon, InputBase, alpha } from '@mui/material';
import { Menu, Search, Inbox } from '@mui/icons-material'


const styles = {
    fullList: {
        width: 300
    }
};

const Sidebar = (props) => {
    const { openSideBar } = props
    const [open, setOpen] = React.useState(true);
    const [close, setClose] = React.useState(true);
    // showDrawer = event => {
    //     if (
    //         event &&
    //         event.type === "keydown" &&
    //         (event.key === "Tab" || event.key === "Shift")
    //     ) {
    //         return;
    //     }

    //     this.setState({ openSidebar: true });
    // };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Sidebar state: " + this.state.openSidebar);
    // }

    // const fullList = () => {
    //     // const { classes, onClose } = props;
    //     // const [option, setOption] = React.useState(true);
    //     const [onClose, setOnClose] = React.useState(false)
    //     return (
    //         <div
    //             // className={classes.fullList}
    //             role="presentation"
    //             onClick={onClose}
    //             onKeyDown={onClose}
    //         >
    //             <List>
    //                 {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
    //                     <ListItem button key={text}>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <Inbox /> : <Menu />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItem>
    //                 ))}
    //             </List>
    //             <Divider />
    //             <List>
    //                 {["All mail", "Trash", "Spam"].map((text, index) => (
    //                     <ListItem button key={text}>
    //                         <ListItemIcon>
    //                             {index % 2 === 0 ? <Inbox /> : <Menu />}
    //                         </ListItemIcon>
    //                         <ListItemText primary={text} />
    //                     </ListItem>
    //                 ))}
    //             </List>
    //         </div>
    //     );
    // };
    // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    return (
        <SwipeableDrawer
            open={openSideBar}
            onOpen={openSideBar}
            onClose={close}
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        >
            {/* {fullList()} */}
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <Inbox /> : <Menu />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    )
}

export default withStyles(styles)(Sidebar);
