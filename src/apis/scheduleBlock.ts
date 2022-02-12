import axios from 'utils/customAxios';
import { ScheduleBlockDto } from './dtos';

export const getScheduleBlocksByTimetableId = async (
  timetableId: string
): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.get(`/timetables/${timetableId}/scheduleblocks`);
  return res.data;
};

export const createScheduleBlock = async ({
  tableId,
  startTime,
  startMinute,
  endTime,
  endMinute,
  day,
  label,
}: ScheduleBlockDto.CreateRequest): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.post('/scheduleblocks', {
    tableId,
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
  tableId,
  startTime,
  endTime,
  day,
  label,
}: ScheduleBlockDto.UpdateRequest): Promise<ScheduleBlockDto.ScheduleBlock[]> => {
  const res = await axios.put('/scheduleblocks', {
    tableId,
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
