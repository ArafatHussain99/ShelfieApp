import { createContext, useState } from 'react';

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, paassword){

    }
    async function register(email, paassword){
        
    }
    async function logout(){
        
    }
    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}