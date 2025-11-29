import Footer from "../components/Footer";
import Header from "../components/Header";
import {Outlet} from "react-router-dom"


export default function Layout(){
    return(
        <>
         {/* here the header and footer will remain same and the inside child element will get render*/}
        <Header/>
        <Outlet />  {/*<Outlet /> = Where the child routes will be rendered.*/}
        <Footer/>
        </>
    )
}