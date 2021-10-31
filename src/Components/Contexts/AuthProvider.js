import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import usePackages from '../hooks/usePackages';
// import useBook from '../hooks/useBook'
export const AuthContex = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    // const {selectedBook,addBook} = useBook()
    const {packages,setPackages} = usePackages()
    const data = {allContext,packages,setPackages}
    return (
        <AuthContex.Provider  value={data}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;