import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import TodoDisplay from './pages/TodoDisplay'
import TodoForm from './pages/TodoForm'

function App() {
  // to give some default value i should add some text in usestate only
  // using local storage to store the todos
  // when the page load the todos which are added need to show when ever the page refresh

  // getting the todos from local storage
  const [todoList, settodoList] = useState(()=>{
    const todos = localStorage.getItem("todos")
    return todos? JSON.parse(todos) : []
  })
   
  const addTodo = (todo)=>{
    settodoList((prev)=>([{id:Date.now(), ...todo}, ...prev]))
  }

  const updateTodo = (id,updatedTodo)=>{
    settodoList((prev)=>(prev.map(todo=>(todo.id === id)?updatedTodo : todo)))
  }

  const deleteTodo =(id)=>{
    settodoList((prev)=>(prev.filter(todo=>todo.id!=id)))
  }

  const toggleTheBox = (id)=>{
    settodoList((prev)=>(prev.map(todo =>(todo.id === id ? {...todo, completed: !todo.completed} : todo))))
  }

  // if i do the below method once i refresh the data got vanish because the use state will get initialized with empty array then it run the useEffect
  // so its recommended to use the getItem of localStorage in useState while initializing
  
  // useEffect(()=>{
  //   // In browser the data will get stored as string so need to parse it before using
  //   const todos = JSON.parse(localStorage.getItem("todos"))
  //   console.log(todos)
  //   if(todos){
  //     settodoList(todos)
  //   }
  // },[])

  // storing the todos to local storage

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoList))
  },[todoList])

  return (
    <TodoContextProvider value={{todoList,addTodo,updateTodo,deleteTodo,toggleTheBox}}>
    <div className='bg-blue-900 min-h-screen flex flex-col'>
        <TodoForm />
        {todoList.map((todo)=>(
          //*******IMP*********
          // problem
          // Add sleep → OK
          // Add get up → UI shows sleep again (twice)
          // don't forget of adding the key to parent container it will not add the to do properly
           <TodoDisplay key={todo.id} todo={todo} />
        ))}
    </div>
    </TodoContextProvider>
  )
}

export default App
