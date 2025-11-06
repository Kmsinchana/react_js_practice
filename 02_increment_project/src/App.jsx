import { useState } from 'react'
import './App.css'
function App() {
  //wrong way of assignong the value
  //let counter = 0
  //Returns a stateful value, and a function to update it
  const [count,setCount]= useState(0)//o will be the initial state

  let addCounter = ()=>{
    setCount(count+1)
    // eventhough i am updating the counter value but it will not getting reflected in the UI
  }

  function minusCounter(){
    setCount(count-1)
  }
  return (
    <div className='maindiv'>
      <h1>Counter(increment) Project</h1>
      <p>The values range between 0 to 20</p>
      <div>The value is : {count}</div>
      {/* the browser will check of the disabled is true or false before executing the onclick */}
      <button id='add' disabled={count===20} onClick={addCounter}>add value</button>
      <button id='minus' disabled={count===0} onClick={minusCounter}>minus value</button>
    </div>
  )
}

export default App
