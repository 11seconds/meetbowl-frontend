import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import useCurrentUser from 'hooks/useCurrentUser';
import { ScheduleBlockDto } from 'apis/dtos';
import * as apis from 'apis';

import Timetable from 'components/timetable/Timetable';
import ScreenSpinner from 'components/common/ScreenSpinner';

type TimetableContainerProps = {
  timetableId: string;
};

const TimetableContainer = ({ timetableId }: TimetableContainerProps) => {
  const { isLoading, id: userId } = useCurrentUser();
  const { data: timetable, refetch } = useQuery<ScheduleBlockDto.ScheduleBlock[] | null, Error>(
    'getSchedulblocks',
    () => apis.scheduleBlock.getScheduleBlocksByTimetableId(timetableId as string),
    {
      refetchInterval: 3000,
    }
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
        if (scheduleBlock.userId === userId) {
          deleteMutation.mutate({ id: scheduleBlock.id });
        }
      } else {
        createMutation.mutate(cell);
      }
    },
    [createMutation, deleteMutation, userId]
  );

  if (isLoading) return <ScreenSpinner />;
  if (!userId) return <Navigate to="/" />;

  return <Timetable timetable={timetable || []} userId={userId} onClick={handleClick} />;
};

export default TimetableContainer;
