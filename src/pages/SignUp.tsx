import { useState, useMemo, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useCurrentUser from 'hooks/useCurrentUser';
import useRedirect from 'hooks/useRedirect';
import { user } from 'apis';

import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import ScreenSpinner from 'components/common/ScreenSpinner';

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
          <TextField align="center" placeholder="이름을 입력해주세요" onChange={(e) => setNickname(e.target.value)} />
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
