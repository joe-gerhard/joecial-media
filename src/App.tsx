import React, { useEffect, Dispatch } from 'react';
import firebase from './config/firebase';
import Navbar from './components/Navbar';
import PageDisplay from './components/PageDisplay';
import { useDispatch } from 'react-redux';
import { UserActions } from './redux/actions/userActions';

function App() {
    const userDispatch = useDispatch<Dispatch<UserActions>>();
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                userDispatch({ type: 'SET_USER', user })
            } else {
                userDispatch({ type: 'SET_USER', user: null })
            }
        })
    }, [userDispatch])

    return (
        <div>
            <Navbar />
            <PageDisplay />
        </div>
  );
}

export default App;
