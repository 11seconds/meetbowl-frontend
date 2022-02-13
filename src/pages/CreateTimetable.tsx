import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import useCurrentUser from 'hooks/useCurrentUser';
import { timetable } from 'apis';

import MobileScreen from 'components/common/MobileScreen';
import FullScreenButtonTemplate from 'components/templates/FullScreenButtonTemplate';
import Button from 'components/common/Button';
import TextField from 'components/common/TextField';
import ScreenSpinner from 'components/common/ScreenSpinner';

const CreateTimetable = () => {
  const navigate = useNavigate();
  const { timetableId } = useParams();
  const { isLoading, isActive } = useCurrentUser();

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!isLoading && !isActive) {
      navigate(`/sign-up`);
    }
  }, [navigate, isLoading, isActive, timetableId]);

  const mutation = useMutation(async () => {
    const { id } = await timetable.createTimetable({ title });
    navigate(`/timetable/${id}`);
  });

  const disabled = useMemo(() => {
    if (title.length === 0) return true;
    return false;
  }, [title]);

  if (isLoading) return <ScreenSpinner />;

  return (
    <MobileScreen>
      <FullScreenButtonTemplate
        content={
          <TextField align="center" placeholder="시간표 제목을 입력하세요" onChange={(e) => setTitle(e.target.value)} />
        }
        button={
          <Button color="red" size="lg" disabled={disabled} onClick={() => mutation.mutate()}>
            생성하기
          </Button>
        }
      />
    </MobileScreen>
  );
};

export default CreateTimetable;
