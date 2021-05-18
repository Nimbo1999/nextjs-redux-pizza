import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {

        pallet: {
            white:  string;
            black:  string;
            primary:  string;
            secondary:  string;
            title:  string;
            text:  string;
            hint: string;
            grey:  string;
            lightGrey:  string;
            success:  string;
            danger:  string;
            info:  string;
            warning:  string;
        };

        font: {
            title: string;
            text: string;
        }

        spacing: Function;

    }
}