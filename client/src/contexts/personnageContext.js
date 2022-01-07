import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PersonnageContext = createContext();

export const PersonnageProvider = (props) => {
  const [personnage, setPersonnage] = useState([]);

  useEffect(() => {
    axios
      .get("/personnages")
      .then((res) => setPersonnage(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!personnage.length) return null;

  return (
    <PersonnageContext.Provider value={[personnage, setPersonnage]}>
      {props.children}
    </PersonnageContext.Provider>
  );
};