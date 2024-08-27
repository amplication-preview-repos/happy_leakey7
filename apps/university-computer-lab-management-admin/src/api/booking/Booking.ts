import { Computer } from "../computer/Computer";
import { Student } from "../student/Student";

export type Booking = {
  bookingDate: Date | null;
  computer?: Computer | null;
  createdAt: Date;
  duration: number | null;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
