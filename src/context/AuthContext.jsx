import { createContext,useEffect,useState,} from "react";

export const AuthContext = createContext()

export const  AuthContextProvider =({children})=>{
    
    const [auth,setAuth] = useState(false)

    const handleAuth =(s)=>{
            setAuth(s)
    }

    return <AuthContext.Provider value={{auth,handleAuth}}>
            {children}
           </AuthContext.Provider>
}
