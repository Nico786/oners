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
  DateField
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
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="textContent" />
      {/* <ArrayField source="textContent">
        <Datagrid>
          <TextField source="0" />
		  <TextField source="1" /> */}
          {/* <UrlField source="url" /> */}
        {/* </Datagrid>
      </ArrayField> */}
    </Datagrid>
  </List>
);

// export const SectionEdit = (props) => (
//   <Edit title={<SectionName />} {...props}>
//     <TextInput disabled label="Id" source="id" />
//     <TextInput source="title" validation={{ required: true }} />
//     <TextInput multiline source="teaser" validation={{ required: true }} />
//     <RichTextInput source="body" validation={{ required: true }} />
//     <DateInput label="Publication date" source="published_at" />
//   </Edit>
// );

// export const SectionEdit = (props) => (
// <Edit title={<SectionName />} {...props}>
//     <SimpleForm>
//       <TextInput disabled source="id" />
//       <TextInput source="name" />
//       <TextInput source="textContent" />
//     </SimpleForm>
//   </Edit>
// );

export const SectionEdit = (props) => (
    <Edit name={<SectionName />} {...props}>
		<SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validation={{ required: true }} />
        <TextInput multiline source="teaser" validation={{ required: true }} />
        <RichTextInput source="textContent" validation={{ required: true }} />
        {/* <DateInput label="Publication date" source="published_at" /> */}
		</SimpleForm>
    </Edit>
);

// export const SectionEdit = (props) => (
//   <Edit title={<SectionTitle />} {...props}>
//     <SimpleForm>
//       <TextInput disabled source="id" />
//       <ReferenceInput source="userId" reference="users">
//         <SelectInput optionText="name" />
//       </ReferenceInput>
//       <TextInput source="title" />
//       <TextInput multiline source="body" />
//     </SimpleForm>
//   </Edit>
// );

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Create>
);