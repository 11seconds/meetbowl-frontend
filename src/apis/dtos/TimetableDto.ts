export type Timetable = {
  id: string;
  title: string;
  description: string;
  createUserId: string;
};

export type CreateRequest = Pick<Timetable, 'title'> & Pick<Partial<Timetable>, 'description'>;

export type UpdateRequest = Pick<Timetable, 'id' | 'title'> & Pick<Partial<Timetable>, 'description'>;
