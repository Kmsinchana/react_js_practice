import { useParams } from "react-router-dom"

export default function Product(){
    // this will fetch the dynamic parts of the url
    //useParam will return 
    // {
    //   category: "laptop",
    //   number: "101"
    //  }

  const {category, number} = useParams()
   return(
    <>
    <h1>The product category is:{category} and product number is: {number}</h1>
    </> 
)}