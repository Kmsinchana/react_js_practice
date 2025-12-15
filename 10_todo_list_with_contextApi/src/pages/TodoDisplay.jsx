import { useState } from "react"
import TodoUseContext from "../context/TodoContext"

export default function TodoDisplay({ todo }) {
    const { updateTodo, deleteTodo, toggleTheBox } = TodoUseContext()
    const [editMsg, setEditMsg] = useState(todo.text)
    const [iseditable, setEseditable] = useState(false)
    // to check wheather all the functions are coming from TodoUseContext
    // const context = TodoUseContext()
    //console.log(context)
    // console.log(todoList.map(todo=>todo.text))

    function editTodo(){
        updateTodo(todo.id,{...todo, text:editMsg})
        setEseditable(false)
    }

   function cancelChange(){
        setEditMsg(todo.text) //set the text to original text
        setEseditable(false) //make the fiels as false
    }


    return (
        <div className="flex bg-white w-full max-w-md mx-auto rounded-2xl p-5 mt-6"
            key={todo.id}
        >
            {/* using flex-grow to increase the input size */}
            <div className="flex gap-4 grow ">
                <input type="checkbox" name="" id=""
                    // todo.completed is a boolean
                    //  true → checkbox is checked
                    //  false → checkbox is unchecked
                    // and it will update the completed boolean as well
                    checked={todo.completed}
                    // *****IMP*******
                    // always call the function like this 
                    // if i write onChange={toggleTheBox}   don't do this 
                    // toggleTheBox(todo.id) executes immediately during render
                    // Not when the checkbox is clicked
                    // steps:
                    // 1.User clicks checkbox
                    // 2.onChange fires
                    // 3.toggleTheBox(todo.id) runs
                    // 4.State updates:
                    // 5.React re-renders
                    // 6.checked={todo.completed} updates checkbox
                    onChange={() => toggleTheBox(todo.id)}
                />

                <input type="text" name="" id=""
                    // **********IMP**************** 
                    className={`outline-none w-full mr-3 ${todo.completed ? "line-through text-gray-400" : "text-black"} ${iseditable?"border border-black/30 px-2":"boarder border-transparent"}`}
                    value={editMsg}
                    onChange={(e) => setEditMsg(e.target.value)}
                    readOnly={!iseditable}
                />
            </div>
            <div className="flex gap-4">
                {/* edit and save/cancel button */}
                {/* editable true the save and cancel should come or if its true then edit button should come */}
                {iseditable ? (
                    <>
                    {/* save button */}
                        <button
                            className="bg-blue-600 p-1 rounded-sm cursor-pointer"
                            // when hover it will display this text
                            title="save"
                            onClick={()=>editTodo()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                            </svg>
                        </button>
                        {/* cancel button */}
                        <button
                            className="bg-red-600 p-1 rounded-sm cursor-pointer"
                            title="cancel"
                            onClick={()=> cancelChange()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-blue-600 p-1 rounded-sm cursor-pointer"
                        onClick={() => setEseditable(true)}
                        title="edit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                )
                }

                {/* delete button */}
                <button
                    className="bg-red-600 p-1 rounded-sm cursor-pointer"
                    onClick={() => deleteTodo(todo.id)}
                    title="delete"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div >
        </div >
    )
}
