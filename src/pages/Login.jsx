import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../API";


export function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const userData = {
              email: email,
              password: password
            };
      
            const data = await loginUser(userData);
      
                localStorage.setItem('token', data.token);
                navigate('/profile');
            } catch (error) {
            console.error('Login error:', error.message);
        }
        
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
   )
}