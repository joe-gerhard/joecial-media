import React from 'react'
import Styled from './styles';
import CreatePostUtility from '../../components/CreatePost';

const NewsFeedPage = () => {

    return (
        <Styled.NewsFeedPage>

           <CreatePostUtility />
            News Feed:
        </Styled.NewsFeedPage>
    )
}

export default NewsFeedPage;
