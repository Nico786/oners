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

const PersonnageName = ({ record }) => {
  return <span>Personnage {record ? `"${record.nom}"` : ""}</span>;
};

export const PersonnageList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
	  <TextField source="backgroundColorModal" />
    </Datagrid>
  </List>
);

export const PersonnageEdit = (props) => (
  <Edit name={<PersonnageName />} {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
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