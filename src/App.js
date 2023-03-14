import React, {useContext, useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./components/store/auth-context";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // const loginHandler = (email, password) => {
    //     // We should of course check email and password
    //     // But it's just a dummy/ demo anyways
    //     localStorage.setItem('isLoggedIn', '1')
    //     setIsLoggedIn(true);
    // };
    //
    // const logoutHandler = () => {
    //     localStorage.removeItem('isLoggedIn')
    //     setIsLoggedIn(false);
    // };

    const authCtx = useContext(AuthContext);
    {/*isAuthenticated={isLoggedIn} onLogout={authCtx.onLogout}*/}
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!authCtx.isLoggedIn && <Login/>}
                {authCtx.isLoggedIn && <Home/>}
            </main>
        </React.Fragment>
    );
}

export default App;
