import { ComputerWhereInput } from "./ComputerWhereInput";
import { ComputerOrderByInput } from "./ComputerOrderByInput";

export type ComputerFindManyArgs = {
  where?: ComputerWhereInput;
  orderBy?: Array<ComputerOrderByInput>;
  skip?: number;
  take?: number;
};
