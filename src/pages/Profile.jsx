import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Profile() {

    const { username, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const verifyLogin = () => {
            if (!isLoggedIn) {
                navigate('/');
            }
        }
        verifyLogin()
    }, [])

    return(
        <><h1>Profile: {username}</h1></>
    )
}