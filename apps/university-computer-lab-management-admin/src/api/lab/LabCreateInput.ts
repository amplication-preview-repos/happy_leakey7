import { ComputerCreateNestedManyWithoutLabsInput } from "./ComputerCreateNestedManyWithoutLabsInput";

export type LabCreateInput = {
  capacity?: number | null;
  computers?: ComputerCreateNestedManyWithoutLabsInput;
  location?: string | null;
  name?: string | null;
};
