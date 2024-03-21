import { Link } from "react-router-dom";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {

    const handleLogOut = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
        window.location.reload(false);
    }

    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books'>All books</Link></li>
                <li><Link to='/authors'>All authors</Link></li>
                {isLoggedIn ? (
                    <>
                        <li><Link to='/profile'>Profile</Link></li>
                        <br />
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </>
                ) : (
                    <>
                        <br />
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </>
                )}
            </ul>
        </>
    );
}

export default Nav;
