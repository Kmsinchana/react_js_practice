import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [display, setDisplay] = useState([
      {id:1,value:'A'},
      {id:2,value:'B'}
    ])

    // for the below code i will get error as
    // react-dom_client.js?v=a2beb455:18616 Each child in a list should have a unique "key" prop.
    // why key is required
    // key helps React to:

// Identify each item uniquely

// Re-render only the changed items

// Avoid bugs or weird UI updates
  return (
    <>
    <button onClick={()=>{setDisplay([{id:3,value:"new"},...display])}}>add new value</button>
     {display.map((item)=>(
        <p value={item.value}></p>
     ))}
    </>
  )
}

export default App
