import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import RichTextInput from "ra-input-rich-text";
import { useMediaQuery } from "@material-ui/core";

const SectionName = ({ record }) => {
  return <span>Section {record ? `"${record.name}"` : ""}</span>;
};

const SectionFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const SectionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="textContent" />
    </Datagrid>
  </List>
);

export const SectionEdit = (props) => (
  <Edit name={<SectionName />} {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <RichTextInput source="textContent" validation={{ required: true }} />
    </SimpleForm>
  </Edit>
);

export const SectionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validation={{ required: true }} />
      <RichTextInput source="textContent" validation={{ required: true }} />
    </SimpleForm>
  </Create>
);