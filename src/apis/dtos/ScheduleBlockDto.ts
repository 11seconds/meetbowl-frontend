export type ScheduleBlock = {
  id: string;
  timetableId: string;
  userId: string;
  nickname: string;
  startTime: number;
  startMinute: number;
  endTime: number;
  endMinute: number;
  day: number;
  label: string;
  color: string;
};

export type CreateRequest = Pick<
  ScheduleBlock,
  'timetableId' | 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day'
> &
  Pick<Partial<ScheduleBlock>, 'label'>;

export type UpdateRequest = Pick<ScheduleBlock, 'timetableId'> &
  Pick<Partial<ScheduleBlock>, 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day' | 'label'>;

export type DeleteRequest = Pick<ScheduleBlock, 'id'>;

export type SelectAll = Pick<ScheduleBlock, 'timetableId'>;

export type UnselectAll = Pick<ScheduleBlock, 'timetableId'>;

export type SelectAllDay = Pick<ScheduleBlock, 'timetableId' | 'day'>;

export type SelectAllTime = Pick<ScheduleBlock, 'timetableId' | 'startTime'>;
