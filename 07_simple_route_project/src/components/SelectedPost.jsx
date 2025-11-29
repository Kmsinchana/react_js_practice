import { useLoaderData } from "react-router-dom"

export default  function SelectedPost(){
    const post = useLoaderData()
    return(
        <>
        <div>
            <h1>the selected post id is:{post.id}</h1>
            <strong>title:{post.title}</strong>
            <strong>body:{post.body}</strong>
        </div>
        </>
    )
}