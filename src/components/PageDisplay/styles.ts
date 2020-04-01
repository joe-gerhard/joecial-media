import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type PageDisplayProps = {
    theme: Theme;
}

const PageDisplay = styled.main(({ theme }: PageDisplayProps) => css`
    display: flex;
    height: calc(100vh - 40px);
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: ${theme.medium};
    color: ${theme.black};
`);

const StyledLink = styled(Link)(({ theme }: PageDisplayProps) => css`
    text-decoration: none;
    color: ${theme.light};
    margin-right: 40px;
`);

export default {
    PageDisplay,
    Link: StyledLink,
}