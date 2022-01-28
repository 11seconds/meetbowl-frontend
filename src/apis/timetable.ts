import axios from 'utils/customAxios';
import { TimetableDto } from './dtos';

export const getTimetable = async (timetableId: string) => {
  const res = await axios.get<TimetableDto.Response>(`/timetables/${timetableId}`);
  return res;
};

export const createTimetable = async (createTimetableRequestDto: TimetableDto.CreateRequest) => {
  const res = await axios.post<TimetableDto.Response>('/timetable', createTimetableRequestDto);
  return res;
};

export const updateTimetable = async (updateTimetableRequestDto: TimetableDto.UpdateRequest) => {
  const res = await axios.put<TimetableDto.Response>('/timetable', updateTimetableRequestDto);
  return res;
};
