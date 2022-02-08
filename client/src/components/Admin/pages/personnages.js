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

const PersonnageName = ({ record }) => {
  return <span>Personnage {record ? `"${record.nom}"` : ""}</span>;
};

const PersonnageFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const PersonnageList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="description" />
	  <TextField source="backgroundColorModal" />
    </Datagrid>
  </List>
);

export const PersonnageEdit = (props) => (
  <Edit name={<PersonnageName />} {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <RichTextInput source="description" validation={{ required: true }} />
	  <TextInput source="backgroundColorModal" validation={{ required: true }} />
    </SimpleForm>
  </Edit>
);

export const PersonnageCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <RichTextInput source="description" validation={{ required: true }} />
	  <TextInput source="backgroundColorModal" validation={{ required: true }} />
    </SimpleForm>
  </Create>
);