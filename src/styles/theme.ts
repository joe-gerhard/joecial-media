import { SimpleInterpolation } from "styled-components";

export type Theme = {
    light: SimpleInterpolation;
    medium: SimpleInterpolation;
    dark: SimpleInterpolation;
    black: SimpleInterpolation;
    primary: SimpleInterpolation;
    primaryDark: SimpleInterpolation;
    secondary: SimpleInterpolation;
}

const theme: Theme = {
    light: '#EEEEEE',
    medium: '#E8E8E8',
    dark: '#DDDDDD',
    black: '#111111',
    primary: '#FF5555',
    primaryDark: '#ED4E4E',
    secondary: '#00FF00',
}

export default theme;
