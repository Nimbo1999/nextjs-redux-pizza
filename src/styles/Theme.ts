  
import { DefaultTheme } from 'styled-components';

const BASE_UNIT = 8;

const theme: DefaultTheme = {
    pallet: {
        white: '#F9F9F9',
        black: '#0B090C',
        primary: '#0073BC',
        secondary: '#F5A434',
        title: '#333333',
        text: '#4F4F4F',
        hint: '#828282',
        grey: '#BDBDBD',
        lightGrey: '#E0E0E0',
        success: '#00A84E',
        danger: '#EB5757',
        info: '#2F80ED',
        warning: '#EEB953',
    },
    
    font: {
        title: "'Montserrat', sans-serif",
        text: "'Noto Sans', sans-serif",
    },
    
    spacing: (value :number) => `${ BASE_UNIT * value }px`,
}

export default theme;