import { useEffect } from 'react';
import { user } from 'apis';
import { UserDto } from 'apis/dtos';
import { useQuery } from 'react-query';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { storeToken } from 'utils/token';

import MobileScreen from 'components/common/MobileScreen';
import ScreenSpinner from 'components/common/ScreenSpinner';
import FullScreenCenterTemplate from 'components/templates/FullScreenCenterTemplate';

const Authorization = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const { isLoading, isError, data, error } = useQuery<UserDto.KakaoLoginResponse, Error>(
    'kakaoLogin',
    () => user.kakaoLogin({ code }),
    {
      retry: 0,
    }
  );

  useEffect(() => {
    if (data?.accessToken) {
      storeToken(data.accessToken);
      navigate('/sign-up');
    }
  }, [data, navigate]);

  if (isLoading)
    return (
      <MobileScreen>
        <FullScreenCenterTemplate content={<ScreenSpinner />} />
      </MobileScreen>
    );

  if (isError) return <>error: {error?.message}</>;
  if (!data) return <> data is empty </>;
  return <>redirecting...</>;
};

export default Authorization;
