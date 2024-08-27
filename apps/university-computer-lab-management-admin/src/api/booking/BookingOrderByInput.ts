import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  bookingDate?: SortOrder;
  computerId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
