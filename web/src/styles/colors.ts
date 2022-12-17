import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {  
        colors: {
            White: string;
            Green: string;
            LightGreen: string;
            DarkGreen: string;
            DarkGreen2: string;
            VeryLightGreen: string;
        };
    }
}

export const theme: DefaultTheme = {
    colors: {
        White: '#FFF',
        Green: '#00980d',
        LightGreen: '#136713',
        VeryLightGreen: '#aae09a',
        DarkGreen: '#073c07',
        DarkGreen2: '#0B4D0B',
    }
}