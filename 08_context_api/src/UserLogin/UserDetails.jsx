import { useContext } from "react"
import Usercontext from "../context/Usercontext"

// error
// caught TypeError: Cannot read properties of undefined (reading 'name')
// *********
// solution
//when it load initially the name value will be undefined so we need use ? This prevents the crash even if user is still undefined.
export default function UserDetails(){
    const {user} = useContext(Usercontext)
    return(
        <>
        <h1>user details are as follows:</h1>
        <p>user name:{user?.name}</p>
        <p>entered password is {user?.password}</p>
        </>
    )
}