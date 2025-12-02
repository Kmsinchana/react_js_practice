import { useState } from "react";
import Usercontext from "./Usercontext";

//step 1 creating a context

function UserContextProvider({children}){
    const [user,setUser] = useState()
    return(
        <>
        {/* code after reacr 19 updates */}
        <Usercontext value={{user,setUser}}> 
          {children}
        </Usercontext>
        {/* SomeContext.Provider is a legacy way to provide the context value before React 19. */}
          {/* // <Usercontext.Provider value={{user,setUser}}>
          //   {children}
          // </Usercontext.Provider>   */}
        </>
    )
}

export default UserContextProvider;