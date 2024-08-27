/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "../../booking/base/Booking";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Lab } from "../../lab/base/Lab";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumComputerStatus } from "./EnumComputerStatus";

@ObjectType()
class Computer {
  @ApiProperty({
    required: false,
    type: () => [Booking],
  })
  @ValidateNested()
  @Type(() => Booking)
  @IsOptional()
  bookings?: Array<Booking>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Lab,
  })
  @ValidateNested()
  @Type(() => Lab)
  @IsOptional()
  lab?: Lab | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  specs!: JsonValue;

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

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Computer as Computer };
