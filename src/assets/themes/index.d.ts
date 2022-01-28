import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
        timetableLine: string;
        kakaoBackground: string;
        kakaoText: string;
      };
    };
  }
}
