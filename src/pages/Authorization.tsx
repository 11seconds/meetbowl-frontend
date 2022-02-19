import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { user } from 'apis';
import { KakaoDto, UserDto } from 'apis/dtos';
import { storeToken } from 'utils/token';

import useRedirect from 'hooks/useRedirect';

import MobileScreen from 'components/common/MobileScreen';
import ScreenSpinner from 'components/common/ScreenSpinner';
import FullScreenCenterTemplate from 'components/templates/FullScreenCenterTemplate';

const Authorization = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { popRedirect } = useRedirect();

  const code = searchParams.get('code');

  const { isLoading: isSignInLoading, data: signInData } = useQuery<KakaoDto.Response, Error>(
    'kakaoLogin',
    () => user.kakaoLogin({ code, redirectUri: `${process.env.REACT_APP_KAKAO_REDIRECT_HOST}/authorization` }),
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  const { isLoading: isCurrentUserLoading, data: currentUserData } = useQuery<UserDto.User, Error>(
    'getCurrentUser',
    () => user.getCurrentUser(),
    {
      retry: 0,
      enabled: !!signInData,
    }
  );

  useEffect(() => {
    const signInSuccess = signInData?.accessToken;

    if (signInSuccess) {
      storeToken(signInData.accessToken);
    }
  }, [signInData, popRedirect]);

  useEffect(() => {
    if (currentUserData) {
      const { isActive } = currentUserData;
      if (isActive) {
        popRedirect();
      } else {
        navigate('/sign-up');
      }
    }
  }, [currentUserData, navigate, popRedirect]);

  if (isSignInLoading && isCurrentUserLoading)
    return (
      <MobileScreen>
        <FullScreenCenterTemplate content={<ScreenSpinner />} />
      </MobileScreen>
    );

  return null;
};

export default Authorization;
