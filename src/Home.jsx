import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import './App.css';
import logo from './assets/react.svg';

const Home = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const login = async () => await oktaAuth.signInWithRedirect();
    const logout = async () => await oktaAuth.signOut();

    return (
        <>

             <img src={logo} alt="logo" className="logo" />

             <div>
             {!authState?.isAuthenticated && (
                <button onClick={login}>Login</button>
            )}

            {authState?.isAuthenticated && (
                <button onClick={logout}>Logout</button>
            )}

             </div>

        <div>
        <p>
                       Edit <code>src/Home.jsx</code> and save to reload.
                     </p>
                   <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                       Learn React
                     </a>
        </div>
        </>

    )
}

export default Home;