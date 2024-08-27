import { BookingCreateNestedManyWithoutStudentsInput } from "./BookingCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  bookings?: BookingCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  studentId?: string | null;
};
