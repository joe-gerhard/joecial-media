import React, { Dispatch } from 'react'
import Styled from './styles';
import firebase, { db } from '../../config/firebase';
import { User } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions/userActions';

const LoginPage = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const userDispatch = useDispatch<Dispatch<UserActions>>()

    const handleSignInWithGoogle = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            let user: User
            
            if (result.user) {
                user = {
                    uid: result.user.uid,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL,
                    email: result.user.email,
                    emailVerified: result.user.emailVerified,
                    phoneNumber: result.user.phoneNumber,
                }
                return user;
            } else {
                throw new Error('firebase sign in error')
            }
        })
        .then(user => {
            db.collection('users').doc(user.uid).get()
            .then((doc) => {
                if(doc.exists) {
                    // this is a returning user
                    console.log(`Welcome back ${user.displayName}`)
                    userDispatch({ type: 'SET_USER', user })
                
                } else {
                    // create a new user
                    db.collection('users').doc(user.uid).set(user)
                    .then(() => {
                        console.log(`User created with id: ${user.uid}`)
                        userDispatch({ type: 'SET_USER', user })
                    })
                }
            })
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
