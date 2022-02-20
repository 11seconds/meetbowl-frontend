import { useState, useMemo, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useCurrentUser from 'hooks/useCurrentUser';
import useRedirect from 'hooks/useRedirect';
import { user } from 'apis';

import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import ScreenSpinner from 'components/common/ScreenSpinner';
import Typography from 'components/common/Typography';
import Margin from 'components/common/Margin';

const SignUp = () => {
  const navigate = useNavigate();
  const { popRedirect } = useRedirect();

  const { isLoading, isActive } = useCurrentUser();
  const [nickname, setNickname] = useState('');

  // 닉네임 설정
  const mutation = useMutation(() => {
    popRedirect();
    return user.updateNickname(nickname);
  });

  const disabled = useMemo(() => {
    if (nickname.length === 0) return true;
    return false;
  }, [nickname]);

  // 이미 activated 된 유저 fallback
  useEffect(() => {
    if (!isLoading && isActive) {
      navigate('/');
    }
  }, [navigate, isLoading, isActive]);

  if (isLoading) return <ScreenSpinner />;

  return (
    <MobileScreen>
      <FullScreenButtonTemplate
        content={
          <>
            <Typography size="xl" weight="bold">
              가입을 환영합니다.
            </Typography>
            <Margin direction="vertical" size={5} />

            <Typography size="base"> 사용할 닉네임을 아래에 입력해주세요.</Typography>
            <Margin direction="vertical" size={50} />

            <TextField width="100%" align="center" placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} />
          </>
        }
        button={
          <Button color="red" size="lg" disabled={disabled} onClick={() => mutation.mutate()}>
            확인
          </Button>
        }
      />
    </MobileScreen>
  );
};

export default SignUp;
