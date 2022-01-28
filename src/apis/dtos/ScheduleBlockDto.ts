export type Response = {
  user_id: string;
  start_datetime: Date;
  end_datetime: Date;
};

export type CreateRequest = {
  table_id: string;
  start_datetime: Date;
  end_datetime: Date;
  label: string;
  user_id: string;
};

export type UpdateRequest = {
  table_id: string;
  start_datetime?: Date;
  end_datetime?: Date;
  label?: string;
  user_id: string;
};
