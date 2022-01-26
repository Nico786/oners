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

const CacaName = ({ record }) => {
  return <span>Caca {record ? `"${record.nom}"` : ""}</span>;
};

const CacaFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const CacaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nom" />
      <TextField source="contenu" />
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

export const CacaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="nom" validation={{ required: true }} />
      <RichTextInput source="contenu" validation={{ required: true }} />
    </SimpleForm>
  </Edit>
);

// export const CacaEdit = (props) => (
// <Edit {...props}>
//     <SimpleForm>
//       <TextInput disabled source="id" />
//       <TextInput source="nom" />
//       <TextInput source="contenu" />
//     </SimpleForm>
//   </Edit>
// );

// export const CacaEdit = (props) => (
//   <Edit nom={<CacaName />} {...props}>
//     <SimpleForm>
//       <TextInput disabled label="Id" source="id" />
//       <TextInput source="nom" validation={{ required: true }} />
//       {/* <TextInput multiline source="teaser" validation={{ required: true }} /> */}
//       <RichTextInput source="contenu" validation={{ required: true }} />
//       {/* <DateInput label="Publication date" source="published_at" /> */}
//     </SimpleForm>
//   </Edit>
// );

// export const CacaEdit = (props) => (
//   <Edit title={<CacaTitle />} {...props}>
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
