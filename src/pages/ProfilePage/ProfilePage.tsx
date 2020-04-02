import React from 'react'
import Styled from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import firebase from '../../config/firebase';
import { useHistory } from 'react-router-dom';

const ProfilePage = () => {
    const { user } = useSelector((state: AppState) => state.user)
    const history = useHistory()

    const handleSignOut = () => {
        firebase.auth().signOut()
        history.push('/')
    }

    return (
        <Styled.ProfilePage>
            {`${user?.displayName?.split(' ')[0]}'s profile page`}
            <button onClick={handleSignOut}>Sign Out</button>
        </Styled.ProfilePage>
    )
}

export default ProfilePage;
