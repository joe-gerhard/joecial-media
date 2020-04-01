import React from 'react'
import Styled from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';

const ProfilePage = () => {
    const { user } = useSelector((state: AppState) => state.user)

    return (
        <Styled.ProfilePage>
            {`${user?.displayName?.split(' ')[0]}'s profile page`}
        </Styled.ProfilePage>
    )
}

export default ProfilePage;
