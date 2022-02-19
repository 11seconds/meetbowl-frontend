import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { TimetableDto } from 'apis/dtos';
import { timetable } from 'apis';

import useCurrentUser from 'hooks/useCurrentUser';
import Skeleton from 'react-loading-skeleton';

import Header from 'components/timetable/Header';
import Title from 'components/timetable/Title';
import CircleButton from 'components/common/CircleButton';
import Button from 'components/common/Button';
import Margin from 'components/common/Margin';

type HeaderContainerProps = {
  timetableId: string;
  onError: (error: Error) => void;
};

const HeaderContainer = ({ timetableId, onError }: HeaderContainerProps) => {
  const { id: userId } = useCurrentUser();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data,
    error,
    refetch: refetchTimetable,
  } = useQuery<TimetableDto.Timetable, Error>(['getTimetable', timetableId], () => timetable.getTimetable(timetableId));

  const mutation = useMutation(async (title: string) => {
    await timetable.updateTimetable({ id: timetableId as string, title });
    refetchTimetable();
  });

  const handleNewClick = () => {
    navigate('/');
  };

  if (isError || (!isLoading && !data)) {
    if (error) onError(error);
    else onError(new Error('알 수 없는 에러가 발생하였습니다.'));

    return null;
  }

  return (
    <Header
      title={
        data ? (
          <Title
            title={data.title}
            isEditable={userId === data.createUserId}
            onChange={(title) => mutation.mutate(title)}
          />
        ) : (
          <Skeleton width="100%" height="33px" />
        )
      }
      menu={
        <>
          <CircleButton color="red" icon="share" url={window.location.href} />
          <Margin direction="horizontal" size={12} />
          <Button size="sm" onClick={handleNewClick}>
            새 시간표
          </Button>
        </>
      }
    />
  );
};

export default HeaderContainer;
