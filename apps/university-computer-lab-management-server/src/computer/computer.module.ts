import { Module } from "@nestjs/common";
import { ComputerModuleBase } from "./base/computer.module.base";
import { ComputerService } from "./computer.service";
import { ComputerController } from "./computer.controller";
import { ComputerResolver } from "./computer.resolver";

@Module({
  imports: [ComputerModuleBase],
  controllers: [ComputerController],
  providers: [ComputerService, ComputerResolver],
  exports: [ComputerService],
})
export class ComputerModule {}
