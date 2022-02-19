import { useQuery } from 'react-query';

import * as apis from 'apis';
import { ScheduleBlockDto } from 'apis/dtos';

import * as timetableState from 'states/timetableState';

// import Margin from 'components/common/Margin';
// import Flex from 'components/common/Flex';
import Typography from 'components/common/Typography';
import BottomSheet from 'components/timetable/BottomSheet';
// import Toggle from 'components/common/Toggle';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import NameSlider from 'components/timetable/NameSlider';

type BottomSheetContainerProps = {
  timetableId: string;
};

type SubmitterType = Pick<ScheduleBlockDto.ScheduleBlock, 'userId' | 'color' | 'nickname'>;

function sliceArray<T>(array: T[], unit: number): T[][] {
  const slicedArray: T[][] = [[]];

  array.forEach((item) => {
    const lastPage: unknown[] = slicedArray[slicedArray.length - 1];

    if (lastPage.length < unit) {
      lastPage.push(item);
      return;
    }

    slicedArray.push([item]);
  });

  return slicedArray;
}

const BottomSheetContainer = ({ timetableId }: BottomSheetContainerProps) => {
  const [selectedSubmitterId, setSelectedSubmitterId] = useRecoilState(timetableState.selectedSubmitterId);

  const { data: scheduleBlocks } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => apis.scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string),
    {
      refetchInterval: 3000,
    }
  );

  // TODO: 정렬
  const submitters = useMemo(() => {
    if (!scheduleBlocks) return [];

    return scheduleBlocks.reduce<SubmitterType[]>((acc, cur) => {
      if (!acc.map((scheduleBlock) => scheduleBlock.userId).includes(cur.userId)) {
        return [...acc, { userId: cur.userId, nickname: cur.nickname, color: cur.color }];
      }
      return acc;
    }, []);
  }, [scheduleBlocks]);

  const handleSubmitterNameClick = useCallback(
    (userId) => {
      if (selectedSubmitterId === userId) {
        setSelectedSubmitterId(null);
        return;
      }

      setSelectedSubmitterId(userId);
    },
    [selectedSubmitterId, setSelectedSubmitterId]
  );

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
        <NameSlider>
          {sliceArray<SubmitterType>(submitters, 9).map((page) => (
            <NameGrid>
              {page.map((submitter) => (
                <SubmitterName
                  key={submitter.userId}
                  color={submitter.color}
                  name={submitter.nickname}
                  highlighted={selectedSubmitterId === submitter.userId}
                  onClick={() => handleSubmitterNameClick(submitter.userId)}
                />
              ))}
            </NameGrid>
          ))}
        </NameSlider>
      }
    />
  );
};

export default BottomSheetContainer;
