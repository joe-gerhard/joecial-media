import styled, { css } from 'styled-components'
import { Theme } from '../../styles/theme'

type NavbarButtonProps = {
    theme: Theme;
    marginLeft?: string;

}
const NavbarButton = styled.div(({ theme, marginLeft }: NavbarButtonProps) => css`
    margin-left: ${marginLeft || 0};
    background: ${theme.primary};
    height: 28px;
    display: flex;
    align-items: center;
    border-radius: 2px;
    font-size: 14px;
    padding: 0 8px;

    &:hover {
        background: ${theme.primaryDark};
        cursor: pointer;
    }
`)

const Image = styled.img(({ theme }: NavbarButtonProps) => css`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    margin-right: 4px;
`)

const Text = styled.span(({ theme }: NavbarButtonProps) => css`
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 0;
    margin-bottom: 2px;
    font-weight: bold;
`)

export default {
    NavbarButton,
    Image,
    Text,
}