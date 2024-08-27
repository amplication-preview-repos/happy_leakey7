import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ComputerTitle } from "../computer/ComputerTitle";
import { StudentTitle } from "../student/StudentTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="bookingDate" source="bookingDate" />
        <ReferenceInput
          source="computer.id"
          reference="Computer"
          label="computer"
        >
          <SelectInput optionText={ComputerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
