import { useContext, useState } from "react"
import Usercontext from "../context/Usercontext"
import { useNavigate } from "react-router-dom"


// Step 3: Use the Context in Any Component


// error i got 
//A component is changing an uncontrolled input to be controlled. 
// This is likely caused by the value changing from undefined to a defined value, which should not happen. 
// Decide between using a controlled or uncontrolled input element for the lifetime of the component

// *********************//
//solution

// this happen because use state is undefined and the value are changing from undefined to define so we need to Provide an empty string "" as default
export default function Login(){
    const [name, setName] = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = useContext(Usercontext)
    // without this we receive the error as
    // Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    const navigate = useNavigate();


    const setUserValue = (e)=>{
        e.preventDefault()
        setUser({name,password})
        navigate('/details')
    }
    return(
        <>
        <input type="text" name="" id="" 
        placeholder="User Name"
        className="input_text"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        />
        <input type="text" name="" id="" 
        placeholder="password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button
        onClick={setUserValue}
        >submit</button>
        </>
    )
}