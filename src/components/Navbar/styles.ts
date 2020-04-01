import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

type NavbarProps = {
    theme: Theme;
}

const Navbar = styled.nav(({ theme }: NavbarProps) => css`
    display: flex;
    align-items: center;
    height: 40px;
    width: 100vw;
    padding: 0 100px;
    background: ${theme.primary};
    color: ${theme.light};
`);

const StyledLink = styled(Link)(({ theme }: NavbarProps) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.light};
    margin-right: 40px;
`);

const Button = styled('span')(({ theme }: NavbarProps) => css`
    text-decoration: none;
    color: ${theme.light};
    margin-right: 40px;
    
    &:hover {
        cursor: pointer;
    }
`);

const Logo = styled('img')(({ theme }: NavbarProps) => css`
    width: 20px;
`);

export default {
    Navbar,
    Link: StyledLink,
    Button,
    Logo,
}