import React from 'react'
import Styled from './styles';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import LandingPage from '../../pages/LandingPage';
import NewsFeedPage from '../../pages/NewsFeedPage';
import ProfilePage from '../../pages/ProfilePage';
import _404Page from '../../pages/_404Page'

const PageDisplay = () => {
    const { user } = useSelector((state: AppState) => state.user);

    return (
        <Styled.PageDisplay>
            <Switch>
                {user && 
                 <Route exact path="/profile" component={ProfilePage} />
                }
                <Route exact path="/" component={user ? NewsFeedPage : LandingPage} />
                <Route component={_404Page} />
            </Switch>
        </Styled.PageDisplay>
    )
}

export default PageDisplay
