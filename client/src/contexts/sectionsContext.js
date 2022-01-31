import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const SectionsContext = createContext();

export const SectionsProvider = (props) => {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/sections')
            .then(res => setSections(res.data)) 
            .catch(err => console.log(err))
    },[]); 

    if(!sections.length) return null;

    return (
        <SectionsContext.Provider value={[sections, setSections]}>
            {props.children}
        </SectionsContext.Provider>
    );
}