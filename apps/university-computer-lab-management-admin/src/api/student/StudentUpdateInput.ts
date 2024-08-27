import { BookingUpdateManyWithoutStudentsInput } from "./BookingUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  bookings?: BookingUpdateManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  studentId?: string | null;
};
