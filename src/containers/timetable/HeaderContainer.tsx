import { useQuery, useMutation } from 'react-query';

import { TimetableDto } from 'apis/dtos';
import { timetable } from 'apis';

import Skeleton from 'react-loading-skeleton';

import Header from 'components/timetable/Header';
import Title from 'components/timetable/Title';
import Button from 'components/common/Button';

type HeaderContainerProps = {
  timetableId: string;
  onError: (error: Error) => void;
};

const HeaderContainer = ({ timetableId, onError }: HeaderContainerProps) => {
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

  if (isError || (!isLoading && !data)) {
    if (error) onError(error);
    else onError(new Error('알 수 없는 에러가 발생하였습니다.'));

    return null;
  }

  return (
    <Header
      title={
        data ? (
          <Title title={data.title} onChange={(title) => mutation.mutate(title)} />
        ) : (
          <Skeleton width="100%" height="33px" />
        )
      }
      menu={<Button size="sm"> 저장 </Button>}
    />
  );
};

export default HeaderContainer;
