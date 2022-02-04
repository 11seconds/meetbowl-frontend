import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import { ScheduleBlockDto, TimetableDto } from 'apis/dtos';
import { scheduleBlock, timetable } from 'apis';

import useCurrentUser from 'hooks/useCurrentUser';

import TimetableTemplate from 'components/templates/TimetableTemplate';
import Header from 'components/timetable/Header';
import BottomSheet from 'components/timetable/BottomSheet';
import Typography from 'components/common/Typography';
import Button from 'components/common/Button';
import Toggle from 'components/common/Toggle';
import Flex from 'components/common/Flex';
import Margin from 'components/common/Margin';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';
import Timetable from 'components/timetable/Timetable';
import ScreenSpinner from 'components/common/ScreenSpinner';
import Title from 'components/timetable/Title';

const TimetablePage = () => {
  const navigate = useNavigate();
  const { timetableId } = useParams();
  const { isLoading: isCurrentUserLoading, isActive } = useCurrentUser();

  const {
    isLoading: isTimetableLoading,
    isError: isTimetableError,
    data: timetableData,
    refetch: refetchTimetable,
  } = useQuery<TimetableDto.Response | null, Error>('getTimetable', () =>
    timetable.getTimetable(timetableId as string)
  );

  const {
    isLoading: isScheduleBlocksLoading,
    isError: isScheduleBlocksError,
    // data: scheduleBlocksData,
  } = useQuery<ScheduleBlockDto.Response[] | null, Error>('getSchedulblocks', () =>
    scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string)
  );

  const mutation = useMutation(async (title: string) => {
    await timetable.updateTimetable({ timetableId: timetableId as string, title });
    refetchTimetable();
  });

  useEffect(() => {
    if (!isCurrentUserLoading && !isActive) {
      navigate(`/sign-up?redirect=/timetable/${timetableId}`);
    }
  }, [navigate, isCurrentUserLoading, isActive, timetableId]);

  useEffect(() => {
    if (isTimetableError || isScheduleBlocksError) {
      navigate('/');
    }
  }, [navigate, isTimetableError, isScheduleBlocksError]);

  if (isTimetableLoading || isScheduleBlocksLoading || isCurrentUserLoading) return <ScreenSpinner />;

  return (
    <TimetableTemplate
      header={
        <Header
          title={<Title title={timetableData?.title || ''} onChange={(title) => mutation.mutate(title)} />}
          menu={<Button size="sm"> 저장 </Button>}
        />
      }
      timetable={<Timetable />}
      bottomSheet={
        <BottomSheet
          header={
            <>
              <Typography size="base" weight="bold">
                9명 제출
              </Typography>
              <Flex align="center">
                <Typography size="sm" weight="medium" color="red">
                  모두 선택
                </Typography>
                <Margin direction="horizontal" size={8} />
                <Toggle />
              </Flex>
            </>
          }
          body={
            <NameGrid>
              <SubmitterName color="#f03e3e" name="USER NAME" />
              <SubmitterName color="#0ca678" name="USER NAME" />
              <SubmitterName color="#d6336c" name="USER NAME" />
              <SubmitterName color="#1c7ed6" name="USER NAME" />
              <SubmitterName color="#f59f00" name="USER NAME" />
              <SubmitterName color="#ae3ec9" name="USER NAME" />
              <SubmitterName color="#4263eb" name="USER NAME" />
              <SubmitterName color="#94d82d" name="USER NAME" />
              <SubmitterName color="#7048e8" name="USER NAME" />
            </NameGrid>
          }
        />
      }
    />
  );
};

export default TimetablePage;
