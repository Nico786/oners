import * as React from "react";
import myDataProvider from "./myDataProvider";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { Admin, Resource } from "react-admin";
import { PostEdit, PostList, PostCreate } from "./posts";
import { UserList } from "./users";
// import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { ListGuesser, EditGuesser } from "react-admin";
import { fetchJson as httpClient } from "./httpClient";
import { SectionList, SectionEdit, SectionCreate } from "./sections";
import { PersonnageList, PersonnageEdit, PersonnageCreate } from "./personnages";
import { AuteurList, AuteurEdit, AuteurCreate} from "./auteurs";


import "./Admin.css"

const dataProvider = myDataProvider("http://localhost:4000/api/v1", httpClient);

const BackOffice = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="sections" list={SectionList} edit={SectionEdit} create={SectionCreate} />
    <Resource name="personnages" list={PersonnageList} edit={PersonnageEdit} create={PersonnageCreate} />
    <Resource name="auteurs" list={AuteurList} edit={AuteurEdit} create={AuteurCreate} />
  </Admin>
);

export default BackOffice;