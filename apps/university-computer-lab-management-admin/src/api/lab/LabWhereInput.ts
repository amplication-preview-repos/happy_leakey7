import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ComputerListRelationFilter } from "../computer/ComputerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LabWhereInput = {
  capacity?: IntNullableFilter;
  computers?: ComputerListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
