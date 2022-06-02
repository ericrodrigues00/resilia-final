import { HeaderBg } from "./styled";
import { Link } from "react-router-dom";
export function Navbar(){
    return(
        <HeaderBg>
            
                     <h3>
                        alexandria
                    </h3>
     
                    

            <ul>


                <Link className="link" to="/">
                    <li>Home</li>
                </Link>

                <Link className="link" to="/books">
                    <li>Books</li>
                </Link>
                <Link className="link" to="/post">
                    <li>Add</li>
                </Link>
                
            </ul>
        </HeaderBg>
    )
}

export function Pig(){
    return(
        <h1>pig</h1>
    )
}

