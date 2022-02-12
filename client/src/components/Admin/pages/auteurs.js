import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const AuteurName = ({ record }) => {
  return <span>Auteur {record ? `"${record.nom}"` : ""}</span>;
};

export const AuteurList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="job" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export const AuteurEdit = (props) => (
  <Edit name={<AuteurName />} {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
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