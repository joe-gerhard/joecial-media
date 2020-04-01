import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`

    @font-face {
        font-family: 'News Cycle';
        font-style: normal;
        font-weight: 400;
        src: local('News Cycle'), local('NewsCycle'),
            url('./fonts/NewsCycle-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'News Cycle';
        font-style: bold;
        font-weight: 700;
        src: local('News Cycle'), local('NewsCycle'),
            url('./fonts/NewsCycle-Bold.ttf') format('truetype');
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'News Cycle';

        &:focus {
            outline: none;
        }
    }

    html {
        background: ${theme.primary};
    }


`;