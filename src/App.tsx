import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/common/GlobalStyles';
import themes from 'assets/themes';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import Router from './Router';

import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const queryClient = new QueryClient();

  // kakao API initialize
  useEffect(() => {
    const { Kakao } = window;
    const kakaoKey = process.env.REACT_APP_KAKAO_KEY;

    if (!Kakao.isInitialized()) {
      Kakao.init(kakaoKey);
    }
  }, []);

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
