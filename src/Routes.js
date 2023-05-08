import { Routes, Route } from 'react-router-dom';
import Home from './page/AllProfiles';
import Profile from './page/Profile';
import Setting from './page/Settings';
import SendInvitation from './page/SendInvitation';
import SignIn from './components/signIn/SignIn';
import About from './page/AboutUs';
import Main from './mainlayout/MainPage';
import SignUp from './components/signIn/SignUp'

function RoutingPage() {
    return (
        <div className="App">
            {/* <Main /> */}
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/settings' element={<Setting />} />
                <Route path='/send-invite' element={<SendInvitation />} />
                <Route path='/' element={<SignIn />} />
                <Route path='/about' element={<About />} />
                <Route path='/main' element={<Main />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>

        </div>
    );
}
export default RoutingPage