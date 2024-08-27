import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComputerServiceBase } from "./base/computer.service.base";

@Injectable()
export class ComputerService extends ComputerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
