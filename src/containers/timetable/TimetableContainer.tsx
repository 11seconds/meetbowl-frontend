import { useMutation, useQuery } from 'react-query';

import { ScheduleBlockDto } from 'apis/dtos';
import { scheduleBlock } from 'apis';

import Timetable from 'components/timetable/Timetable';
import { useCallback } from 'react';

type TimetableContainerProps = {
  timetableId: string;
};

const TimetableContainer = ({ timetableId }: TimetableContainerProps) => {
  const { data: timetable, refetch } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string)
  );

  const mutation = useMutation(
    async ({
      startTime,
      endTime,
      day,
    }: {
      startTime: number;
      startMinute: number;
      endTime: number;
      endMinute: number;
      day: number;
    }): Promise<void> => {
      await scheduleBlock.createScheduleBlock({
        tableId: timetableId,
        startTime,
        startMinute: 0,
        endTime,
        endMinute: 0,
        day,
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleClick = useCallback(
    (cell) => {
      mutation.mutate(cell);
    },
    [mutation]
  );

  return <Timetable timetable={timetable || []} onClick={handleClick} />;
};

export default TimetableContainer;
