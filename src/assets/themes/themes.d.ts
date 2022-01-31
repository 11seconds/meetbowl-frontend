import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      borderRadius: '5px';
    };
    colors: {
      generic: {
        primaryBlack: string;
        primaryRed: string;
        secondaryRed: string;
        primaryGray: string;
      };
      specific: {
        disabled: string;
        placeholder: string;
        textFieldBorder: string;
        timetableLine: string;
        kakaoBackground: string;
        kakaoText: string;
        submitterNameText: string;
      };
    };
  }
}
