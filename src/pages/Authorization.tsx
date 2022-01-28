import { useEffect } from 'react';
import { user } from 'apis';
import { UserDto } from 'apis/dtos';
import { useQuery } from 'react-query';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { storeToken } from 'utils/token';

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
    if (data?.access_token) {
      storeToken(data.access_token);
      navigate('/sign-up');
    }
  }, [data, navigate]);

  if (isLoading) return <>authorizing...</>;
  if (isError) return <>error: {error?.message}</>;
  if (!data) return <> data is empty </>;
  return <>redirecting...</>;
};

export default Authorization;
