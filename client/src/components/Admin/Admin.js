import * as React from "react";
import myDataProvider from "./myDataProvider";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { fetchJson as httpClient } from "./httpClient";
import { SectionList, SectionEdit, SectionCreate } from "./pages/sections";
import { PersonnageList, PersonnageEdit, PersonnageCreate } from "./pages/personnages";
import { AuteurList, AuteurEdit, AuteurCreate } from "./pages/auteurs";

import loginPage from "./pages/login";
import Dashboard from "./admincomponents/Dashboard";

import { createBrowserHistory as createHistory } from "history";
import "./Admin.css";

const history = createHistory();


const dataProvider = myDataProvider("/api/v1", httpClient);

const BackOffice = () => (
  <>
    <Admin
      catchAll={Dashboard}
      dashboard={Dashboard}
      dataProvider={dataProvider}
      history={history}
      loginPage={loginPage}
    >
      <Resource
        name="sections"
        list={SectionList}
        edit={SectionEdit}
        create={SectionCreate}
      />
      <Resource
        name="personnages"
        list={PersonnageList}
        edit={PersonnageEdit}
        create={PersonnageCreate}
      />
      <Resource
        name="auteurs"
        list={AuteurList}
        edit={AuteurEdit}
        create={AuteurCreate}
      />
    </Admin>
  </>
);

export default BackOffice;