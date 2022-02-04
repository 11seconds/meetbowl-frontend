import axios from 'utils/customAxios';
import { TimetableDto } from './dtos';

export const getTimetable = async (timetableId: string): Promise<TimetableDto.Response> => {
  const res = await axios.get<TimetableDto.Response>(`/timetables/${timetableId}`);
  return res.data;
};

export const createTimetable = async ({
  title,
  description,
}: TimetableDto.CreateRequest): Promise<TimetableDto.Response> => {
  const res = await axios.post<TimetableDto.Response>('/timetables', {
    title,
    description,
  });
  return res.data;
};

export const updateTimetable = async ({
  timetableId,
  title,
  description,
}: TimetableDto.UpdateRequest): Promise<TimetableDto.Response> => {
  const res = await axios.patch<TimetableDto.Response>(`/timetables/${timetableId}`, {
    timetableId,
    title,
    description,
  });
  return res.data;
};
