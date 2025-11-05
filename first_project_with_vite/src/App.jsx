
function App() {
  let username = "sinchana"
  return (
    <h1> hello react app {username} </h1>
    // {username} is called a JSX Expression (or JSX Expression Placeholder).
    //IMPORTANT
    //we can't write anything inside the jsx statement like {if(username)} not valid
    // because in in createElement it only expect the value not the statement
    // let createReactElement = React.createElement (
    //   "h1",
    //   'hello react app'  //this is for the child 
     //  if(username) // this will be invalid beause its against the standard jsx rule it should be always the value
    // )
    //we can write expression {username.toUpperCase()}
  )
}
export default App
// always remember that the file has to start with capital letter and with .jsx otherwise there will be an error
