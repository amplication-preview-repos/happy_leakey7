import { ComputerWhereUniqueInput } from "../computer/ComputerWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  computer?: ComputerWhereUniqueInput | null;
  duration?: number | null;
  student?: StudentWhereUniqueInput | null;
};
