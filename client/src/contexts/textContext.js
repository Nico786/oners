import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const TextContext = createContext();

export const TextProvider = (props) => {
    const [text, setText] = useState([]);

    useEffect(() => {
        axios.get('http://www.localhost:4000/sections')
            .then(res => setText(res.data)) 
            .catch(err => console.log(err))
    },[]); 

    return (
        <TextContext.Provider value={[text, setText]}>
            {props.children}
        </TextContext.Provider>
    );
}

