import axios from 'utils/customAxios';
import { ScheduleBlockDto } from './dtos';

export const getScheduleBlocksByTimetableId = async (timetableId: string) => {
  const res = await axios.get<ScheduleBlockDto.Response>(`/timetables/${timetableId}/scheduleblocks`);
  return res;
};

export const createTimetable = async (createScheduleBlockRequestDto: ScheduleBlockDto.CreateRequest) => {
  const res = await axios.post<ScheduleBlockDto.Response[]>('/scheduleblock', createScheduleBlockRequestDto);
  return res;
};

export const updateTimetable = async (updateScheduleBlockRequestDto: ScheduleBlockDto.UpdateRequest) => {
  const res = await axios.put<ScheduleBlockDto.Response[]>('/scheduleblock', updateScheduleBlockRequestDto);
  return res;
};
