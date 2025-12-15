import { createContext, useContext } from "react";


export const TodoContext = createContext({
    // list the input and functionality that we can do in todo do list
    // we will have a shared globale state and passing the props becomes annoying and difficult
    // this are only for reference
    todoList:[
        {
        id:1,
        text:"task need to be done",
        completed: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTheBox:(id)=>{}
})

export const TodoContextProvider = TodoContext.Provider;

export default function TodoUseContext(){
    return useContext(TodoContext)
}