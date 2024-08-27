import { BookingCreateNestedManyWithoutComputersInput } from "./BookingCreateNestedManyWithoutComputersInput";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ComputerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutComputersInput;
  lab?: LabWhereUniqueInput | null;
  specs?: InputJsonValue;
  status?: "Option1" | null;
};
