
import './App.css'
// if theimage are in same folder we need to write in this way
import reactImage from './assets/react.svg'
import React_probs from './React_probs.jsx'
function App() {

  return (
    <>
    {/* started to use all classes and learning from tailwind website only */}
    <h1 className='text-2xl font-bold underline text-center mb-3'>hello!! this line is configure using tail wind css</h1>
    {/* to make only 2 card to appear we used flex-wrap algo with basics-[48%] to cards will share the space*/}
     <div className='flex  flex-wrap gap-4'>
      {/* item center will make the item to come horizontal center */}
      {/* and justify content will make the item to come vertical center */}
      {/* if the something is imported then we need to use {} or we can use '' */}
        <React_probs imagesrc ={reactImage} decription='React.js, commonly known as React, is a free and open-source JavaScript library for building user interfaces (UIs). It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.' website_link='https://react.dev/learn'/>
        <React_probs imagesrc ='/vite.svg' decription = 'Vite (pronounced "veet," like the French word for "quick") is a modern, next-generation frontend build tool designed to provide a faster and leaner development experience for web projects.' website_link ='https://vite.dev/'/>
        <React_probs imagesrc ='/vite.svg' decription = 'Vite (pronounced "veet," like the French word for "quick") is a modern, next-generation frontend build tool designed to provide a faster and leaner development experience for web projects.' website_link ='https://vite.dev/'/>
        <React_probs imagesrc ='/vite.svg' decription = 'Vite (pronounced "veet," like the French word for "quick") is a modern, next-generation frontend build tool designed to provide a faster and leaner development experience for web projects.' website_link ='https://vite.dev/'/>
     </div>
    </>
  )
}

export default App
