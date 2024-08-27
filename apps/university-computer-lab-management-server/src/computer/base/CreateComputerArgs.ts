/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComputerCreateInput } from "./ComputerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateComputerArgs {
  @ApiProperty({
    required: true,
    type: () => ComputerCreateInput,
  })
  @ValidateNested()
  @Type(() => ComputerCreateInput)
  @Field(() => ComputerCreateInput, { nullable: false })
  data!: ComputerCreateInput;
}

export { CreateComputerArgs as CreateComputerArgs };
