import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const SectionName = ({ record }) => {
  return <span>Section {record ? `"${record.name}"` : ""}</span>;
};

export const SectionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="textContent" />
    </Datagrid>
  </List>
);

export const SectionEdit = (props) => (
  <Edit name={<SectionName />} {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
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