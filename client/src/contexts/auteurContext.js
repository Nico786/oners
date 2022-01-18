import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuteurContext = createContext();

export const AuteurProvider = (props) => {
  const [auteur, setAuteur] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/auteurs")
      .then((res) => {
        setAuteur(res.data)})
      .catch((err) => console.log(err));
  }, []);

  if (!auteur.length) return null;

  return (
    <AuteurContext.Provider value={[auteur, setAuteur]}>
      {props.children}
    </AuteurContext.Provider>
  );
};