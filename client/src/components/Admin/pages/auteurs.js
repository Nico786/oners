import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  SimpleList,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
  required,
  ReferenceManyField,
  DateField,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";
import { useMediaQuery } from "@material-ui/core";

const AuteurName = ({ record }) => {
  return <span>Auteur {record ? `"${record.nom}"` : ""}</span>;
};

const AuteurFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const AuteurList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="job" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const AuteurEdit = (props) => (
  <Edit name={<AuteurName />} {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <TextInput source="job" validation={{ required: true }} />
      <RichTextInput source="description" validation={{ required: true }} />
    </SimpleForm>
  </Edit>
);

export const AuteurCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <TextInput source="job" validation={{ required: true }} />
      <RichTextInput source="description" validation={{ required: true }} />
    </SimpleForm>
  </Create>
);