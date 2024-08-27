import { BookingUpdateManyWithoutComputersInput } from "./BookingUpdateManyWithoutComputersInput";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ComputerUpdateInput = {
  bookings?: BookingUpdateManyWithoutComputersInput;
  lab?: LabWhereUniqueInput | null;
  specs?: InputJsonValue;
  status?: "Option1" | null;
};
