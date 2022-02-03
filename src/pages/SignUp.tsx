import { useState, useMemo } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { user } from 'apis';

import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';

const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [nickname, setNickname] = useState('');

  const mutation = useMutation(() => {
    const redirectPath = searchParams.get('redirect');

    if (redirectPath) navigate(redirectPath);
    else navigate('/');

    return user.updateNickname(nickname);
  });

  const disabled = useMemo(() => {
    if (nickname.length === 0) return true;
    return false;
  }, [nickname]);

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
