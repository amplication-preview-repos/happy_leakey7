import { ComputerUpdateManyWithoutLabsInput } from "./ComputerUpdateManyWithoutLabsInput";

export type LabUpdateInput = {
  capacity?: number | null;
  computers?: ComputerUpdateManyWithoutLabsInput;
  location?: string | null;
  name?: string | null;
};
