import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <>
            <ul>
                
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'>All books</Link></li>
                <li><Link to='/authors'>All authors</Link></li>
                <li><Link to='/register'>Register</Link></li>
                
            </ul>
        </>
    )
}

export default Nav