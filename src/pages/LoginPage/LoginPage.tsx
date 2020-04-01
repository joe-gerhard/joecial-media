import React, { Dispatch } from 'react'
import Styled from './styles';
import firebase from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions/userActions';

const LoginPage = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const userDispatch = useDispatch<Dispatch<UserActions>>()
    
    const handleSignInWithGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            userDispatch({ type: 'SET_USER', user: result.user })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Styled.LoginPage>
            <button onClick={handleSignInWithGoogle}>Sign in with google</button>
        </Styled.LoginPage>
    )
}

export default LoginPage
