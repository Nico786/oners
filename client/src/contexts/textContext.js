import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const TextContext = createContext();

export const TextProvider = (props) => {
    const [text, setText] = useState([]);

    useEffect(() => {
<<<<<<< HEAD
        axios.get('http://www.localhost:4000/sections')
            .then(res => setText(res.data)) 
=======
        axios.get('http://www.localhost:4000/text')
            .then(res =>setText(res.data)) 
>>>>>>> 1789b96 (rename HomePage->Landing et affichage texte section synopsis depuis mongoDB)
            .catch(err => console.log(err))
    },[]); 

    if(!text.length) return null;

    return (
        <TextContext.Provider value={[text, setText]}>
            {props.children}
        </TextContext.Provider>
    );
}

