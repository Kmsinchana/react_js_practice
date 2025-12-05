
import { useEffect, useState } from 'react'
import './App.css'
import { ToggleContextProvider } from './context/ToggleContext'
import Card from './pages/Card'
import ToggleBtn from './pages/ToggleBtn'

function App() {
  const [theamMode, settheamMode] = useState('light')
  const IdentifyMode = (theamColor) =>{
    settheamMode(theamColor)
}

useEffect(()=>{
    let classListElement = document.querySelector('html').classList
    //removing dark and adding dark to html element
    if(theamMode === "dark"){
      classListElement.add("dark")
    }else{
      classListElement.remove("dark")
    }
},[theamMode])

// when html becomes <html class="dark"> then ALL Tailwind dark: classes become active.
// when its only <html> all light mode will become active
  return (
    <>
      <ToggleContextProvider value={{theamMode,IdentifyMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ToggleBtn />
          </div>
          <div className="grid grid-cols-4 justify-items-center">
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
        </div>
      </div>
      </ToggleContextProvider>
    </>
  )
}

export default App
