import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../API";

import { jwtDecode } from "jwt-decode";

export function Profile() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')

    useEffect(() => {
        const checkToken = async () => {
            const tokenValid = await verifyToken();
            if (!tokenValid) {
                navigate('/');
                localStorage.removeItem('token')
            }
            if (tokenValid){
                decodeToken()
            }
            
        };
        
        checkToken();
    }, [navigate]);

    const decodeToken = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        console.log('decoded token',decoded);
        setUsername(decoded.name)
    }

    return(
        <><h1>Hello {username}</h1></>
    )
}