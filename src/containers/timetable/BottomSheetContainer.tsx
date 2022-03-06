import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery, useMutation } from 'react-query';

import * as apis from 'apis';
import useCurrentUser from 'hooks/useCurrentUser';
import { ScheduleBlockDto } from 'apis/dtos';

import { MdSelectAll, MdRemoveCircleOutline } from 'react-icons/md';

import * as timetableState from 'states/timetableState';

import Flex from 'components/common/Flex';
import Typography from 'components/common/Typography';
import BottomSheet from 'components/timetable/BottomSheet';
import NameGrid from 'components/timetable/NameGrid';
import SubmitterName from 'components/timetable/SubmitterName';
import NameSlider from 'components/timetable/NameSlider';
import Button from 'components/common/Button';

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
  const { id: currentUserId } = useCurrentUser();
  const [selectedSubmitterId, setSelectedSubmitterId] = useRecoilState(timetableState.selectedSubmitterId);

  const { data: scheduleBlocks, refetch } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => apis.scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string),
    {
      refetchInterval: 3000,
    }
  );

  const scheduleBlocksOfCurrentUser = useMemo(() => {
    if (!scheduleBlocks || !currentUserId) return [];
    return scheduleBlocks.filter((block) => block.userId === currentUserId);
  }, [scheduleBlocks, currentUserId]);

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

  const selectAll = useMutation(async () => {
    await apis.scheduleBlock.selectAll({ timetableId });
    refetch();
  });

  const unselectAll = useMutation(async () => {
    await apis.scheduleBlock.unselectAll({ timetableId });
    refetch();
  });

  return (
    <BottomSheet
      header={
        <>
          <Typography size="base" weight="bold">
            {submitters.length} 명 제출
          </Typography>
          <Flex align="center">
            {scheduleBlocksOfCurrentUser.length > 0 ? (
              <Button size="sm" onClick={() => unselectAll.mutate()}>
                <MdRemoveCircleOutline /> 전체 삭제
              </Button>
            ) : (
              <Button size="sm" onClick={() => selectAll.mutate()}>
                <MdSelectAll /> 전체 선택
              </Button>
            )}
          </Flex>
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
