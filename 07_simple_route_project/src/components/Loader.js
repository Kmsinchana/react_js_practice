
//loader function
//i can write with arrow function or normal function as well
export const listAllPost = async()=>{
    let res =await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}
//params is automatically provided by React Router, based on the url
// params.id will match the id field in the JSON output from JSONPlaceholder.
// it should be params only not param
export const listPerticularPost = async({params})=>{
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return res.json()
}

