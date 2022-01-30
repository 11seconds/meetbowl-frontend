import axios from 'utils/customAxios';
import { ScheduleBlockDto } from './dtos';

export const getScheduleBlocksByTimetableId = async (timetableId: string): Promise<ScheduleBlockDto.Response> => {
  const res = await axios.get<ScheduleBlockDto.Response>(`/timetables/${timetableId}/scheduleblocks`);
  return res.data;
};

export const createTimetable = async (
  createScheduleBlockRequestDto: ScheduleBlockDto.CreateRequest
): Promise<ScheduleBlockDto.Response[]> => {
  const res = await axios.post<ScheduleBlockDto.Response[]>('/scheduleblock', createScheduleBlockRequestDto);
  return res.data;
};

export const updateTimetable = async (
  updateScheduleBlockRequestDto: ScheduleBlockDto.UpdateRequest
): Promise<ScheduleBlockDto.Response[]> => {
  const res = await axios.put<ScheduleBlockDto.Response[]>('/scheduleblock', updateScheduleBlockRequestDto);
  return res.data;
};
