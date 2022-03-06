import axios from 'utils/customAxios';
import { ScheduleBlockDto } from './dtos';

export const getScheduleBlocksByTimetableId = async (
  timetableId: string
): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.get(`/timetables/${timetableId}/scheduleblocks`);
  return res.data;
};

export const createScheduleBlock = async ({
  timetableId,
  startTime,
  startMinute,
  endTime,
  endMinute,
  day,
  label,
}: ScheduleBlockDto.CreateRequest): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.post('/scheduleblocks', {
    tableId: timetableId,
    startTime,
    startMinute,
    endTime,
    endMinute,
    day,
    label,
  });
  return res.data;
};

export const updateScheduleBlock = async ({
  timetableId,
  startTime,
  endTime,
  day,
  label,
}: ScheduleBlockDto.UpdateRequest): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.put('/scheduleblocks', {
    tableId: timetableId,
    startTime,
    endTime,
    day,
    label,
  });
  return res.data;
};

export const deleteScheduleBlock = async ({ id }: ScheduleBlockDto.DeleteRequest) => {
  await axios.delete(`/scheduleblocks/${id}`);
};

export const selectAll = async ({ timetableId }: ScheduleBlockDto.SelectAll) => {
  await axios.post('/scheduleblocks/all', null, {
    params: { timetableId },
  });
};

export const unselectAll = async ({ timetableId }: ScheduleBlockDto.UnselectAll) => {
  await axios.delete('/scheduleblocks/all', {
    params: { timetableId },
  });
};

export const selectAllDay = async ({ timetableId, day }: ScheduleBlockDto.SelectAllDay) => {
  await axios.post('/scheduleblocks/day', null, {
    params: { timetableId, day },
  });
};

export const selectAllTime = async ({ timetableId, startTime }: ScheduleBlockDto.SelectAllTime) => {
  await axios.post('/scheduleblocks/time', null, {
    params: { timetableId, startTime },
  });
};
