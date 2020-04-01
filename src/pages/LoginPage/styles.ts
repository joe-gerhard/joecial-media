import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type LoginPageProps = {
    theme: Theme;
}

const LoginPage = styled.div(({ theme }: LoginPageProps) => css`
    display: flex;
    height: calc(100vh - 50px);
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`);


export default {
    LoginPage,
}