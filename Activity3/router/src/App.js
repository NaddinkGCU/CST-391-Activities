import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutThisSite from "./AboutUs";
import ContactUs from "./ContactUs";
import LoginPage from "./LoginPage";
import User from './User';
import NavBar from './NavBar';
import PrivateRoute from "./PrivateRoute";


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (from, navigate) => {
        setIsLoggedIn(true);
        console.log('in handleLogin from', from);
        console.log('in handleLogin navigate', navigate);
        navigate(from, { replace: true });
    };

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<RootElement />} />
                    <Route
                        path='/about'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <AboutThisSite />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <ContactUs />
                            </PrivateRoute>
                        }
                    />

                    <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                    <Route path='/user/:username' element={<User />} />
                </Routes>
                <h5>Some friends of mine</h5>
                <ul>
                    <li>
                        <Link to='user/Josh'>Mary</Link>
                    </li>
                    <li>
                        <Link to='user/Bri'>Justine</Link>
                    </li>
                    <li>
                        <Link to='user/Sofia'>Brianna</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </>
    );
};

const RootElement = () => <span></span>;



export default App;