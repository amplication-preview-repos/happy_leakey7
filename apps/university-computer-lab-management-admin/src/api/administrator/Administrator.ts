export type Administrator = {
  createdAt: Date;
  id: string;
  password: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
