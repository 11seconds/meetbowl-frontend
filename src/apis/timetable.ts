import axios from 'utils/customAxios';
import { TimetableDto } from './dtos';

export const getTimetable = async (timetableId: string): Promise<TimetableDto.Response> => {
  const res = await axios.get<TimetableDto.Response>(`/timetables/${timetableId}`);
  return res.data;
};

export const createTimetable = async ({
  title,
  description,
  createUserId,
}: TimetableDto.CreateRequest): Promise<TimetableDto.Response> => {
  const res = await axios.post<TimetableDto.Response>('/timetable', {
    title,
    description,
    create_user_id: createUserId,
  });
  return res.data;
};

export const updateTimetable = async (
  updateTimetableRequestDto: TimetableDto.UpdateRequest
): Promise<TimetableDto.Response> => {
  const res = await axios.put<TimetableDto.Response>('/timetable', updateTimetableRequestDto);
  return res.data;
};
