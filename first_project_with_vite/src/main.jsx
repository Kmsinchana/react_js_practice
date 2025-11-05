import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//this is also possible
function MyApp(){
  return (
    <h1>hello from function</h1>
  )
}
// behind the scene for the jsx 
// Here’s the full flow:
// You write JSX (syntactic sugar):
// <App />
// Babel compiles it to:
// React.createElement(App, null);
// React.createElement() returns a React element object, like:
// {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//     style: { color: "blue" },
//     children: "click here" //sometime childre may be inside or outside
//   },
//   key: null,
//   ref: null,
//   ...
// }

//this below way is how the elemet will be created with jsx and what behind the scene will happen when we write jsx syntax like <App />
let createReactElement = React.createElement (
  "a",
  {href:'https://google.com',target:'_blank',style:{color:'blue'}}, 
  'click here'  //this is for the child 
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
 // createReactElement
)

//we can call the MyApp as a function as well
//but not recommanded
// createRoot(document.getElementById('root')).render(
//     MyApp()

// )
