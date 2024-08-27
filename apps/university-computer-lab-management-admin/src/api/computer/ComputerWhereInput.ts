import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LabWhereUniqueInput } from "../lab/LabWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ComputerWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  lab?: LabWhereUniqueInput;
  specs?: JsonFilter;
  status?: "Option1";
};
