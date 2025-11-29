import { Link, NavLink } from "react-router-dom";

function Header(){
    return(
        <>
            <div style={{backgroundColor:"black", padding:"20px" }}>
                <ul style={{listStyle:"none",display:"flex",gap:"20px" ,justifyContent: "center"}}>
                    <li>
                       {/* <Link to=''>Home</Link> */}
                       {/* the style will receive the object is active and we can do some changes based on this data */}
                       {/* thw style will take function  ()=>{} and it will take {object} as input */}
                       {/* don't  use {} u need to explecitly return something */}
                       <NavLink to='/' style={({isActive})=>({color: isActive?'white':'yellow'})}>Home</NavLink>
                    </li>
                    <li>
                        <Link to="/about"> about</Link>
                    </li>
                    
                    <li>
                        {/* for now give the url as  e.g:http://localhost:5173/car/12 later we will learn about taking category and id dynamically */}
                        <NavLink to='/:category/:number' style={({isActive})=>({color: isActive?'white':'yellow'})}>Product details</NavLink>
                    </li>
                    <li>
                        <NavLink to='/posts' style={({isActive})=>({color: isActive?'white':'yellow'})}>All post</NavLink>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Header;