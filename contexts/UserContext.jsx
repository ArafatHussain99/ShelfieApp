import { createContext, useState } from 'react';
import { ID } from 'react-native-appwrite';
import { account } from '../lib/appwrite';

export const UserContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, paassword){
        try{
            await account.createEmailPasswordSession(email, paassword);
            const response = await account.get();
            setUser(response);
        }catch(err){
            throw Error(err.message);
        }
    }
    async function register(email, paassword){
        try{
            await account.create(ID.unique(), email, paassword);
            await login(email, paassword);
        }catch(err){
            throw Error(err.message);
        }
    }
    async function logout(){
        await account.deleteSession("current");
        setUser(null);
    }
    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}