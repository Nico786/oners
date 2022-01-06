import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const sectionContext = createContext();

export const SectionProvider = (props) => {
    const [section, setSection] = useState([]);

    useEffect(() => {
        axios.get('http://www.localhost:4000/sections/61d32f81ae6ee4d9186943cd')
            .then(res => setSection(res.data))
            .catch(err => console.log(err))
    },[]); 

    if(!section.length) return null;

    return (
        <sectionContext.Provider value={[section, setSection]}>
            {props.children}
        </sectionContext.Provider>
    );
}