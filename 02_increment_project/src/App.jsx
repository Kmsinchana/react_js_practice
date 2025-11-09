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
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // React doesn’t immediately update the state after each setCount.
    // Instead, it batches multiple updates together (for performance reasons) and applies them all at once at the end of the function.
    // So if count was 0, all 4 calls read the same value (0), and React ends up setting the state to 1 (not 4).
    //instead we can follow the functional update
    setCount((previousCount)=>{return previousCount+1})
    setCount(previousCount=>previousCount+1)
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
      <button id='add' disabled={count>=20} onClick={addCounter}>add value</button>
      <button id='minus' disabled={count===0} onClick={minusCounter}>minus value</button>
    </div>
  )
}

export default App
