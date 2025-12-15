import { useState } from "react"
import TodoUseContext from "../context/TodoContext"

export default function TodoForm() {
    const {addTodo} = TodoUseContext()
    // the issue i got was not adding the todo text properly
    // to add the text with addTodo method i need to pass two argument one is todo text and other one is completed 
    const [input,setInput] = useState('')
    return (
        // mx-auto mill make the form to center it give adds auto left & right margins,
        // m-full mill make the div to display fully and we and add the required width with mac-w-md(medium)
        <div className="bg-white p-3 rounded-2xl mt-10 w-full max-w-md mx-auto shadow-md">
            <form className="flex items-center gap-4">
                <input type="text" name="" id=""  
                placeholder="Task to be done..."
                // the grow(flex-grow) is the one that will help to grow as much the parent div grow
                className="grow p-3 border border-gray-300 rounded-xl text-gray-700 outline-none"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                />
                <button 
                type="button" 
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition cursor-pointer "
                onClick={()=>{
                    if(!input.trim()) return
                    // i should specify text:input only otherwise i will not get output
                    addTodo({text:input, completed:false})
                    setInput("")
                }}>Add</button>
            </form>
        </div>
    )
}

