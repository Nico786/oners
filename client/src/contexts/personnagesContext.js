import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PersonnagesContext = createContext();

export const PersonnagesProvider = (props) => {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    axios
      .get("/personnages")
      .then((res) => setPersonnages(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!personnages.length) return null;

  return (
    <PersonnagesContext.Provider value={[personnages, setPersonnages]}>
      {props.children}
    </PersonnagesContext.Provider>
  );
};