export type Response = {
  userId: string;
  startDatetime: Date;
  endDatetime: Date;
};

export type CreateRequest = {
  tableId: string;
  startDatetime: Date;
  endDatetime: Date;
  label: string;
  userId: string;
};

export type UpdateRequest = {
  tableId: string;
  startDatetime?: Date;
  endDatetime?: Date;
  label?: string;
  userId: string;
};
