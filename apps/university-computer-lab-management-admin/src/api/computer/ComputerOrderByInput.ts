import { SortOrder } from "../../util/SortOrder";

export type ComputerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  labId?: SortOrder;
  specs?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
