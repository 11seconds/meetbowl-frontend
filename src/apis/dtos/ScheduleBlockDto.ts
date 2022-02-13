export type ScheduleBlock = {
  id: string;
  tableId: string;
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
  'tableId' | 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day'
> &
  Pick<Partial<ScheduleBlock>, 'label'>;

export type UpdateRequest = Pick<ScheduleBlock, 'tableId'> &
  Pick<Partial<ScheduleBlock>, 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day' | 'label'>;

export type DeleteRequest = Pick<ScheduleBlock, 'id'>;
