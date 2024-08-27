import { Computer as TComputer } from "../api/computer/Computer";

export const COMPUTER_TITLE_FIELD = "id";

export const ComputerTitle = (record: TComputer): string => {
  return record.id?.toString() || String(record.id);
};
