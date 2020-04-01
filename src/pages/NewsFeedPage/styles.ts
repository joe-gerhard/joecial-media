import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type NewsFeedPageProps = {
    theme: Theme;
}

const NewsFeedPage = styled.div(({ theme }: NewsFeedPageProps) => css`
    display: flex;
    height: calc(100vh - 50px);
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`);

const StyledLink = styled(Link)(({ theme }: NewsFeedPageProps) => css`
    text-decoration: none;
    color: ${theme.light};
    margin-right: 40px;
`);

export default {
    NewsFeedPage,
    Link: StyledLink,
}