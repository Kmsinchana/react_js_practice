import { useState } from "react"
import { useEffect } from "react"

function useFetchData(currency){
    // Because React components re-render only when state changes.
    //if we write res=>res[currency] it won't work because state dosen't changes
    const [data,setData] = useState({})
    useEffect(()=>{
     fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then(res =>res.json())
    .then(res =>setData(res[currency]))
},[currency])
   return data
}
export default useFetchData;