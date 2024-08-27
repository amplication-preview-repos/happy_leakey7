import * as graphql from "@nestjs/graphql";
import { ComputerResolverBase } from "./base/computer.resolver.base";
import { Computer } from "./base/Computer";
import { ComputerService } from "./computer.service";

@graphql.Resolver(() => Computer)
export class ComputerResolver extends ComputerResolverBase {
  constructor(protected readonly service: ComputerService) {
    super(service);
  }
}
