import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { Grid, Tab, Tabs, MenuList, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home, Person, Mail, Signpost, Info, Settings, History, ResetTv } from '@mui/icons-material'
import HomePage from '../page/AllProfiles';
import Invitation from '../page/Invites'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Profile from '../page/Profile';
import AboutUss from '../page/AboutUs';
import EmailSend from '../page/Invites'
import Historys from '../page/History'
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [homepages, setHomePages] = React.useState(false);
    const [profilePage, setProfilePage] = React.useState(false);
    const [invitation, setInvitation] = React.useState(false);
    const [history, setHistory] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const [value, setvalue] = React.useState(0)
    const navigate = useNavigate()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleProfile = () => {
        setProfile(true);
    };
    const handleSignOut = (text) => {
        navigate('/', { replace: false })

    }
    // React.useEffect(() => {
    //     // Check if the user is already logged in
    //     // const isLoggedIn = /* Add your login check logic here */;

    //     // if (isLoggedIn) {
    //         navigate('/login', { replace: true }); // Redirect to the dashboard or any other page
    //     // }
    // }, [navigate]);
    const handleChangeHome = () => {
        setHomePages(true);
        setInvitation(false);
        setHistory(false);
        setProfilePage(false);
    }
    const handleChangeProfile = () => {
        setProfilePage(true)
        setHistory(false)
        setInvitation(false)
        setHomePages(false);
        
    }
    const handleChangeInvitation = () => {
        setInvitation(true)
        setHomePages(false);
        setHistory(false)
        setProfilePage(false)
    }
    const handleChangeHistory = () => {
        setHistory(true)
        setInvitation(false)
        setHomePages(false);
        setProfilePage(false)
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar style={{ height: '8%', background: '#581845' }} position="fixed" open={open}>
                <Toolbar
                // style={{
                //     background: 'linear-gradient(to right bottom, #000428 , #004e92)',
                //     height: '24%'
                // }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div"> Pro Book</Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {/* <Grid>
                    <Link to="/home" className="Link">
                        <FaHome /> &nbsp; &nbsp;Home
                    </Link>
                </Grid> */}
                <List>
                    <ListItemButton onClick={handleChangeHome}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton onClick={handleChangeProfile}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton onClick={handleChangeInvitation}>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="Send Invitation" />
                    </ListItemButton>
                    <Divider />

                    <ListItemButton onClick={handleChangeProfile}>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton onClick={handleChangeHistory}>
                        <ListItemIcon>
                            <History />
                        </ListItemIcon>
                        <ListItemText primary="History" />
                    </ListItemButton>
                    <ListItemButton onClick={handleChangeHome}>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="About Us" />
                    </ListItemButton>
                    <ListItemButton onClick={handleSignOut}>
                        <ListItemIcon>
                            <ResetTv />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItemButton>
                </List>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {homepages === true && <HomePage />}
                {invitation === true && <EmailSend />}
                {history === true && <Historys />}
                {profilePage === true && <Profile />}

            </Box>
        </Box>
    );
}