import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  sizes: {
    borderRadius: '5px',
  },
  colors: {
    generic: {
      primaryBlack: '#232323',
      primaryRed: '#E14A40',
      secondaryRed: '#FBE4E2',
      primaryGray: '#F5F5F5',
    },
    specific: {
      disabled: '#DEDEDE',
      placeholder: '#D8D8D8',
      timetableLine: '#EEEEEE',
      textFieldBorder: '#EEEEEE',
      kakaoBackground: '#FEE500',
      kakaoText: '#525252',
    },
  },
};

export default { light };
