/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingCreateNestedManyWithoutComputersInput } from "./BookingCreateNestedManyWithoutComputersInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { LabWhereUniqueInput } from "../../lab/base/LabWhereUniqueInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumComputerStatus } from "./EnumComputerStatus";

@InputType()
class ComputerCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutComputersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutComputersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutComputersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutComputersInput;

  @ApiProperty({
    required: false,
    type: () => LabWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LabWhereUniqueInput)
  @IsOptional()
  @Field(() => LabWhereUniqueInput, {
    nullable: true,
  })
  lab?: LabWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  specs?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumComputerStatus,
  })
  @IsEnum(EnumComputerStatus)
  @IsOptional()
  @Field(() => EnumComputerStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ComputerCreateInput as ComputerCreateInput };
