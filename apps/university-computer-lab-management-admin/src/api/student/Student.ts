import { Booking } from "../booking/Booking";

export type Student = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  studentId: string | null;
  updatedAt: Date;
};
