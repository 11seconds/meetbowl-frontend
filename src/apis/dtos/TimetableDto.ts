export type Response = {
  title: 'string';
  description: 'string';
  create_user_id: 'string';
  id: 'string';
};

export type CreateRequest = {
  title: string;
  description: string;
  create_user_id: string;
};

export type UpdateRequest = {
  id: string;
  title: string;
  description?: string;
  create_user_id: string;
};
