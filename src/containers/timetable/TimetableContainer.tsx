import { useMutation, useQuery } from 'react-query';

import { ScheduleBlockDto } from 'apis/dtos';
import * as apis from 'apis';

import Timetable from 'components/timetable/Timetable';
import { useCallback } from 'react';

type TimetableContainerProps = {
  timetableId: string;
};

const TimetableContainer = ({ timetableId }: TimetableContainerProps) => {
  const { data: timetable, refetch } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => apis.scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string)
  );

  const createMutation = useMutation(
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
      await apis.scheduleBlock.createScheduleBlock({
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

  const deleteMutation = useMutation(
    async ({ id }: ScheduleBlockDto.DeleteRequest): Promise<void> => {
      await apis.scheduleBlock.deleteScheduleBlock({
        id,
      });
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleClick = useCallback(
    (cell, scheduleBlock?: ScheduleBlockDto.ScheduleBlock) => {
      if (scheduleBlock) {
        deleteMutation.mutate({ id: scheduleBlock.id });
      } else {
        createMutation.mutate(cell);
      }
    },
    [createMutation, deleteMutation]
  );

  return <Timetable timetable={timetable || []} onClick={handleClick} />;
};

export default TimetableContainer;
