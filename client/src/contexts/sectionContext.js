import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const SectionContext = createContext();

export const SectionProvider = (props) => {
    const [section, setSection] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/sections')
            .then(res => setSection(res.data)) 
            .catch(err => console.log(err))
    },[]); 

    if(!section.length) return null;

    return (
        <SectionContext.Provider value={[section, setSection]}>
            {props.children}
        </SectionContext.Provider>
    );
}