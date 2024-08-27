import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComputerWhereUniqueInput } from "../computer/ComputerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  computer?: ComputerWhereUniqueInput;
  duration?: IntNullableFilter;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
