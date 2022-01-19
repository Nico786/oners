import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuteursContext = createContext();

export const AuteursProvider = (props) => {
  const [auteurs, setAuteurs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/auteurs")
      .then((res) => {
        setAuteurs(res.data)})
      .catch((err) => console.log(err));
  }, []);

  if (!auteurs.length) return null;

  return (
    <AuteursContext.Provider value={[auteurs, setAuteurs]}>
      {props.children}
    </AuteursContext.Provider>
  );
};