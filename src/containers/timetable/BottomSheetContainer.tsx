import { useQuery } from 'react-query';

import * as apis from 'apis';
import { ScheduleBlockDto } from 'apis/dtos';

// import Margin from 'components/common/Margin';
// import Flex from 'components/common/Flex';
import Typography from 'components/common/Typography';
import BottomSheet from 'components/timetable/BottomSheet';
// import Toggle from 'components/common/Toggle';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';
import { useMemo } from 'react';

type BottomSheetContainerProps = {
  timetableId: string;
};

const BottomSheetContainer = ({ timetableId }: BottomSheetContainerProps) => {
  const { data: scheduleBlocks } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => apis.scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string),
    {
      refetchInterval: 3000,
    }
  );

  const submitters = useMemo(() => {
    if (!scheduleBlocks) return [];

    return scheduleBlocks.reduce<Pick<ScheduleBlockDto.ScheduleBlock, 'userId' | 'color' | 'nickname'>[]>(
      (acc, cur) => {
        if (!acc.map((scheduleBlock) => scheduleBlock.userId).includes(cur.userId)) {
          return [...acc, { userId: cur.userId, nickname: cur.nickname, color: cur.color }];
        }
        return acc;
      },
      []
    );
  }, [scheduleBlocks]);

  return (
    <BottomSheet
      header={
        <>
          <Typography size="base" weight="bold">
            {submitters.length} 명 제출
          </Typography>
          {/* <Flex align="center">
            <Typography size="sm" weight="medium" color="red">
              모두 선택
            </Typography>
            <Margin direction="horizontal" size={8} />
            <Toggle />
          </Flex> */}
        </>
      }
      body={
        <NameGrid>
          {submitters.map((submitter) => (
            <SubmitterName key={submitter.userId} color={submitter.color} name={submitter.nickname} />
          ))}
        </NameGrid>
      }
    />
  );
};

export default BottomSheetContainer;
