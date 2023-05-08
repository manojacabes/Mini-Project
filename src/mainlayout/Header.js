import React from "react";
// import "./../assets/style/Header.css";
import ProBookWaterMark from "./../assets/images/ProBookWaterMark.png";

// function Header() {
//   return (
//     <div className="LayoutHeader">
//       <form>
//         <input
//           type="submit"
//           value="Update Profile from LinkedIn"
//           className="btn text-dark text-center UpdateProfile"
//         />
//       </form>
//       <img src={ProBookWaterMark} alt="ProBook WaterMark" />
//     </div>
//   );
// }

// export default Header;
// import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { FaHome } from "react-icons/fa";
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Link, HashRouter as Router } from "react-router-dom";
// import { WorkBenchOverlayButtonV3 } from 'react-ab-workbench';
import { AppBar, Toolbar, Typography, Grid, ListItemText, styled, Hidden, Button, IconButton, Tooltip, useMediaQuery, SwipeableDrawer, List, ListItem, ListItemButton, ListItemIcon, InputBase, alpha } from '@mui/material';
import { Menu, Search, Close, Inbox, Apple } from '@mui/icons-material'
import sideBar from "./sideBar";
import NavBar from "./Navbar";
const useStyles = makeStyles((theme) => ({

  root: {
    background: 'linear-gradient(to right bottom, #000428 , #004e92)'
    // backgroundColor
    // boxShadow: 'none'
    // background: 'red'
  },

  logo: {

    height: '36px',

    width: '156px'
  },
  Buttons: {
    color: 'white'
  }

  // toolbar: {

  //   paddingLeft: theme.spacing(1) + 3,

  //   paddingRight: theme.spacing(1)

  // },

  // titleWrapper: {

  //   userSelect: 'none'
  // },

  // title: {

  //   userSelect: 'none',

  //   color: theme.palette.primary.contrastText,

  //   fontWeight: 400,

  //   textAlign: 'center',

  //   [theme.breakpoints.down('md')]: {

  //     display: 'hidden'
  //   },

  //   marginInlineStart: '0.5rem'
  // },

  // subtitle: {

  //   userSelect: 'none',

  //   color: theme.palette.primary.contrastText,

  //   fontWeight: 600,

  //   flexGrow: 1,

  //   textAlign: 'center',

  //   // fontFamily: 'Changa',
  //   [theme.breakpoints.down('md')]: {

  //     display: 'hidden'
  //   }

  // },

  // flexGrow: {

  //   flexGrow: 1
  // },

  // iconWrapper: {

  //   minWidth: '40px'
  // },

  // signOutButton: {

  //   // marginLeft: theme.spacing(1)
  // },

  // flex: {

  //   display: 'flex',

  //   alignItems: 'center',

  //   alignContent: 'center'
  // },

  // profileLogo: {

  //   width: '2.3rem'
  // },

  // search: {

  //   position: 'relative',

  //   borderRadius: theme.shape.borderRadius,

  //   backgroundColor: "#7569bd",

  //   marginLeft: 0,

  //   width: '100%',

  //   [theme.breakpoints.up('sm')]: {

  //     marginLeft: theme.spacing(1),

  //     width: 'auto',

  //   },

  // },

  // searchIcon: {

  //   padding: theme.spacing(0, 2),

  //   height: '100%',

  //   position: 'absolute',

  //   pointerEvents: 'none',

  //   display: 'flex',

  //   alignItems: 'center',

  //   justifyContent: 'center',

  // },

  // inputRoot: {

  //   color: '#ffff',

  // },

  // inputInput: {

  //   padding: theme.spacing(1, 1, 1, 0),

  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

  //   transition: theme.transitions.create('width'),

  //   width: '100%',

  //   [theme.breakpoints.up('sm')]: {

  //     width: '30ch',

  //     '&:focus': {

  //       width: '33ch',

  //     },

  //   },

  //   border: "none !important",

  //   color: '#ffff',

  // }

}));

const Topbar = (props) => {
  const [openSideBar, setOpenSideBar] = React.useState(false)

  const classes = useStyles();

  // const currentUser = UAM.getUserDetails();
  const currentUser = 'manojKumar';
  // const open = Boolean(anchorEl);
  const handleClick = () => {
    setOpenSideBar(true)
    console.log('hello open')
  }
  const handleClose = () => {
    setOpenSideBar(false)
    console.log('hello close')
  }
  const MyButton = styled(Button)(({ theme }) => ({
    color: 'white',
    margin: theme.spacing(1),
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
  }));
  return (

    <AppBar className={clsx(classes.root)}>
      <Toolbar disableGutters className={classes.toolbar}>
        <Grid container className={classes.flex} justifyContent='space-between'>
          <Grid item className={classes.flex}>
            {/* <IconButton color="inherit">
              <Menu onClick={handleClick} />
            </IconButton> */}
            <IconButton color="inherit">
              <Apple />
            </IconButton>
            <SwipeableDrawer
              open={openSideBar}
              onOpen={openSideBar}
              onClose={handleClose}
            // disableBackdropTransition={!iOS}
            // disableDiscovery={iOS}
            >
              <Grid style={{ marginTop: '10px' }}>
                <Close onClick={handleClose} />
              </Grid>
              {/* <NavBar /> */}
              {/* <Link to="/home" className="Link">
                <FaHome /> &nbsp; &nbsp;Home
              </Link> */}
              <List>
                {["Home", "Starred", "Send email", "Drafts"].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <Inbox /> : <Menu />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
            {/* <sideBar openSideBar={openSideBar} /> */}
            {/* <RouterLink to="/"> */}
            {/* <img
              className={classes.logo}

              alt="Logo"
              src={<Apple />}

            /> */}
            {/* </RouterLink> */}
          </Grid>
          <Grid style={{ display: 'flex' }}>

            {/* <Router basename="/"> */}
              <div className="App">
                <MyButton component={Link} to="/"> // why doesn't this work?
                  My Button
                </MyButton>
              </div>
            {/* </Router> */}
            <Button style={{ color: 'white' }}>Home</Button>
            <Button style={{ color: 'white' }}>Profile</Button>
            <Button style={{ color: 'white' }}>AboutUs</Button>
            <Button style={{ color: 'white' }}>Settings</Button>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  );

};

Topbar.propTypes = {

  className: PropTypes.string,

  onSidebarOpen: PropTypes.func
};

export default Topbar;
