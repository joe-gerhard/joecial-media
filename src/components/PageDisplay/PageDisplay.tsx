import React from 'react'
import Styled from './styles';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import LandingPage from '../../pages/LandingPage';
import LoginPage from '../../pages/LoginPage';
import NewsFeedPage from '../../pages/NewsFeedPage';
import ProfilePage from '../../pages/ProfilePage';

const PageDisplay = () => {
    const { user } = useSelector((state: AppState) => state.user);

    return (
        <Styled.PageDisplay>
            <Switch>
                <Route path="/login" component={LoginPage} />
                {user && 
                 <Route path="/profile" component={ProfilePage} />
                }
                <Route path="/" component={user ? NewsFeedPage : LandingPage} />
            </Switch>
        </Styled.PageDisplay>
    )
}

export default PageDisplay
