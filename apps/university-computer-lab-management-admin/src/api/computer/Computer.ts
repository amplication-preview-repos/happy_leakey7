import { Booking } from "../booking/Booking";
import { Lab } from "../lab/Lab";
import { JsonValue } from "type-fest";

export type Computer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  lab?: Lab | null;
  specs: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
