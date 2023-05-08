import { Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './page/AllProfiles';
import Profile from './page/Profile';
import Setting from './page/Settings';
import SendInvitation from './page/SendInvitation';
import SignIn from './components/signIn/SignIn';
import About from './page/AboutUs';
import Main from './mainlayout/MainPage';
import SignUp from './components/signIn/SignUp'
import homePage from './page/HomePage';
import Headers from './mainlayout/Header'
import MiniDrawer from './mainlayout/Main'
import SignInForm from './mainlayout/SignIn';
// import Routes from './Routes';

const App = () => {
  return (
    // <SignInForm/>
    // <Router>
    //   {/* <Switch> */}
    //     <Route exact path="/" component={SignInForm} />
    //     {/* <Route path="/home" component={MiniDrawer} /> */}
    //   {/* </Switch> */}
    // </Router>
    <div>
      <Routes>
        <Route exact path="/" Component={SignInForm} />
        <Route exact path="/home" Component={MiniDrawer} />
      </Routes>
    </div>


    // <MiniDrawer />
  );
};

export default App;
