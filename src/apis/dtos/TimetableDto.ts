export type Response = {
  title: 'string';
  description: 'string';
  createUserId: 'string';
  id: 'string';
};

export type CreateRequest = {
  title: string;
  description: string;
};

export type UpdateRequest = {
  id: string;
  title: string;
  description?: string;
  createUserId: string;
};
