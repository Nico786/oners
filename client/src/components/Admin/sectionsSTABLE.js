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
  SimpleFormIterator
} from "react-admin";

import { useMediaQuery } from "@material-ui/core";

const sectionTitle = ({ record }) => {
  return <span>Section {record ? `"${record.title}"` : ""}</span>;
};

const sectionFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const SectionList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={sectionFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          {/* <ReferenceField label="Sections" source="sections" reference="sections"> */}
            <TextField source="name" />
            <TextField source="textContent" />
          {/* </ReferenceField> */}
        </Datagrid>
      )}
    </List>
  );
};

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