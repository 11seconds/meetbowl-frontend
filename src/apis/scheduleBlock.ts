import axios from 'utils/customAxios';
import { ScheduleBlockDto } from './dtos';

export const getScheduleBlocksByTimetableId = async (timetableId: string): Promise<ScheduleBlockDto.Response[]> => {
  const res = await axios.get<ScheduleBlockDto.Response[]>(`/timetables/${timetableId}/scheduleblocks`);
  return res.data;
};

export const createScheduleBlock = async ({
  tableId,
  startDatetime,
  endDatetime,
  label,
  userId,
}: ScheduleBlockDto.CreateRequest): Promise<ScheduleBlockDto.Response[]> => {
  const res = await axios.post<ScheduleBlockDto.Response[]>('/scheduleblocks', {
    tableId,
    startDatetime,
    endDatetime,
    label,
    userId,
  });
  return res.data;
};

export const updateScheduleBlock = async ({
  tableId,
  startDatetime,
  endDatetime,
  label,
  userId,
}: ScheduleBlockDto.UpdateRequest): Promise<ScheduleBlockDto.Response[]> => {
  const res = await axios.put<ScheduleBlockDto.Response[]>('/scheduleblocks', {
    tableId,
    startDatetime,
    endDatetime,
    label,
    userId,
  });
  return res.data;
};
