/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Administrator } from "./Administrator";
import { AdministratorCountArgs } from "./AdministratorCountArgs";
import { AdministratorFindManyArgs } from "./AdministratorFindManyArgs";
import { AdministratorFindUniqueArgs } from "./AdministratorFindUniqueArgs";
import { CreateAdministratorArgs } from "./CreateAdministratorArgs";
import { UpdateAdministratorArgs } from "./UpdateAdministratorArgs";
import { DeleteAdministratorArgs } from "./DeleteAdministratorArgs";
import { AdministratorService } from "../administrator.service";
@graphql.Resolver(() => Administrator)
export class AdministratorResolverBase {
  constructor(protected readonly service: AdministratorService) {}

  async _administratorsMeta(
    @graphql.Args() args: AdministratorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Administrator])
  async administrators(
    @graphql.Args() args: AdministratorFindManyArgs
  ): Promise<Administrator[]> {
    return this.service.administrators(args);
  }

  @graphql.Query(() => Administrator, { nullable: true })
  async administrator(
    @graphql.Args() args: AdministratorFindUniqueArgs
  ): Promise<Administrator | null> {
    const result = await this.service.administrator(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Administrator)
  async createAdministrator(
    @graphql.Args() args: CreateAdministratorArgs
  ): Promise<Administrator> {
    return await this.service.createAdministrator({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Administrator)
  async updateAdministrator(
    @graphql.Args() args: UpdateAdministratorArgs
  ): Promise<Administrator | null> {
    try {
      return await this.service.updateAdministrator({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Administrator)
  async deleteAdministrator(
    @graphql.Args() args: DeleteAdministratorArgs
  ): Promise<Administrator | null> {
    try {
      return await this.service.deleteAdministrator(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
