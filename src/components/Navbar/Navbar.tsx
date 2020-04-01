import React from 'react'
import Styled from './styles';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import NavbarButton from '../NavbarButton';

const Navbar : React.FC = () => {
    const { user } = useSelector((state: AppState) => state.user)
    const firstName = (user?.displayName && user.displayName.split(' ')[0]) ?? 'Profile'

    return (
        <Styled.Navbar>
            <Styled.Link to="/">
                <Styled.Logo src="/logoInverted192.png" alt="Joecial Media"/>
            </Styled.Link>
            { user?.photoURL &&
                <>
                <NavbarButton marginLeft="auto" to="/profile" image={user.photoURL}>{firstName}</NavbarButton>
                <NavbarButton to="/">Home</NavbarButton>
                </>
            }
        </Styled.Navbar>
    )
}

export default Navbar
