import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdministratorWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
};
