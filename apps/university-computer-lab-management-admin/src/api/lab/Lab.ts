import { Computer } from "../computer/Computer";

export type Lab = {
  capacity: number | null;
  computers?: Array<Computer>;
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
