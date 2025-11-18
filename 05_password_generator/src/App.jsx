import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState('8')
  const [smallAlpha, setsmallAlpha] = useState(false)
  const [capAlpha, setcapAplha] = useState(false)
  const [number, setNumber] = useState(false)
  const [specialChar, setspecialChar] = useState(false)
  const refPassword = useRef(null)
  //it has only current object

  // optimize approch will be useing memo need to learn
  const passwordchange = useCallback (()=>{
    let pass = ''
    let string = ''
    if(smallAlpha) string+= 'abcdefghijklmnopqrstuvwxyz'
    if(capAlpha) string+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(number) string+= '123456789'
    if(specialChar) string+= '@$%&*!^'
    for(let i=0;i<length;i++){
      let randnum = Math.floor(Math.random()*string.length)
      pass += string.charAt(randnum)
    }
    setPassword(pass)
  },[length,smallAlpha,capAlpha,number,specialChar]) //if this parameter change then only the new function will get return or the old function which is stored in cache will get return

  useEffect(()=>{
    passwordchange()
  }
  ,[length,smallAlpha,capAlpha,number,specialChar])

  //we can write normal function but this is the most optimized version
  const copyToClipBoard = useCallback(()=>{
    //we will get the whole html tag here
    //console.log(refPassword.current)
    
    //this will select the whohole input
    refPassword.current?.select()

    //we can select limited input selection
    //refPassword.current?.setSelectionRange(0,2)

    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      {/* max-w-md → limits the width of the container (prevents it from stretching full width).
        mx-auto → applies margin-left: auto; margin-right: auto;, which centers the container horizontally if it has a defined width. */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='font-mono text-4xl allign-center ml-6'>PASSWORD GENERATOR</h1>
        <div className='flex'>
          <input
            type="text"
            className='bg-white w-full px-2 py-3 rounded-sm mb-5'
            readOnly
            value={password}
            placeholder='password'
            // refering the refpassword this will give the whole html element.
            ref={refPassword}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 rounded-sm shrink-0 cursor-pointer mb-5'
            onClick={copyToClipBoard}>
            copy</button>
        </div>
          <div className='flex text-2xl gap-4'>
            <input
              type="range"
              min={6}
              max={100}
              className='w-55' 
              value={length} //problem the cursor used to come in middle so this help to place the cursore on to the value and also we get the target field
              // onchange will be used for input tags
              onChange={(e)=>{setLength(e.target.value)}}/>
              <span>length: {length}</span>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-2 basis-1/2 items-center'>
            <input type="checkbox"
            onChange={()=>{setsmallAlpha((prev) =>!prev)}}
            />
            <span>"a-z"</span>
            </div>
            <div className='flex gap-1 basis-1/2 items-center'>
            <input type="checkbox"
            onChange={()=>{setcapAplha((prev=> !prev))}}/>
            <span> "A-Z"</span>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-2 basis-1/2 items-center'>
            <input type="checkbox"
            onChange={()=>{setNumber((prev => !prev))}}/>
            <span>"0-9"</span>
            </div>
            <div className='flex gap-2 basis-1/2 items-center'>
            <input type="checkbox"
            onChange={()=>{setspecialChar(prev => !prev)}}/>
            <span> "@$%&*!^"</span>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
