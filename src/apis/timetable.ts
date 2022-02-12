import axios from 'utils/customAxios';
import { TimetableDto } from './dtos';

export const getTimetable = async (timetableId: string): Promise<TimetableDto.Timetable> => {
  const res = await axios.get(`/timetables/${timetableId}`);
  return res.data;
};

export const createTimetable = async ({
  title,
  description,
}: TimetableDto.CreateRequest): Promise<TimetableDto.Timetable> => {
  const res = await axios.post('/timetables', {
    title,
    description,
  });
  return res.data;
};

export const updateTimetable = async ({
  id,
  title,
  description,
}: TimetableDto.UpdateRequest): Promise<TimetableDto.Timetable> => {
  const res = await axios.patch(`/timetables/${id}`, {
    id,
    title,
    description,
  });
  return res.data;
};
