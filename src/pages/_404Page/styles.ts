import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type _404PageProps = {
    theme: Theme;
}

const _404Page = styled.div(({ theme }: _404PageProps) => css`
    display: flex;
    height: calc(100vh - 50px);
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`);

const StyledLink = styled(Link)(({ theme }: _404PageProps) => css`
    text-decoration: none;
    color: ${theme.light};
    margin-right: 40px;
`);

export default {
    _404Page,
    Link: StyledLink,
}