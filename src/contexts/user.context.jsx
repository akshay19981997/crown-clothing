import { createContext, useState } from "react";


export const UserContext = createContext({
    currentUser:null,
    setUserData: ()=> null,
})

export const UserProvider = ({children}) => {
    const [currentUser,setUserData] = useState(null);
   const value={currentUser,setUserData};
return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}