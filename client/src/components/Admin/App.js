import * as React from "react";
import myDataProvider from "./myDataProvider";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import { Admin, Resource} from "react-admin";
import { PostEdit, PostList, PostCreate } from './posts';
import { UserList } from './users';
// import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { ListGuesser, EditGuesser} from "react-admin";
import { fetchJson as httpClient } from "./httpClient";
import { SectionList, SectionEdit } from "./sections";


const dataProvider = myDataProvider("http://localhost:4000", httpClient);
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} /> */
    <Resource name="sections" list={SectionList} edit={SectionEdit}/>}
  </Admin>
);

export default App;