import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComputerService } from "./computer.service";
import { ComputerControllerBase } from "./base/computer.controller.base";

@swagger.ApiTags("computers")
@common.Controller("computers")
export class ComputerController extends ComputerControllerBase {
  constructor(protected readonly service: ComputerService) {
    super(service);
  }
}
