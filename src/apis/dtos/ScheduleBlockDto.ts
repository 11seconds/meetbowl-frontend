export type ScheduleBlock = {
  tableId: string;
  userId: string;
  startTime: number;
  startMinute: number;
  endTime: number;
  endMinute: number;
  day: number;
  label: Date;
};

export type CreateRequest = Pick<
  ScheduleBlock,
  'tableId' | 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day'
> &
  Pick<Partial<ScheduleBlock>, 'label'>;

export type UpdateRequest = Pick<ScheduleBlock, 'tableId'> &
  Pick<Partial<ScheduleBlock>, 'startTime' | 'startMinute' | 'endTime' | 'endMinute' | 'day' | 'label'>;
