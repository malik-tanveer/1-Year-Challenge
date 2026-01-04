import axios from "axios";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate
    ();
    const [formData, SetFormData] = useState({
        name: "",
        email: ""
    });

    const [message, SetMessage] = useState("");

    const handleChange = (e) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(e);

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            SetMessage("Login Success");
            console.log(res.data);

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                 navigate("/");
            }
        } catch (error) {
            SetMessage(error.response?.data?.message || "Login Failed");
        }
    }
    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="sumbmit">Login</button>
            </form>

            <p>{message}</p>
            <p>Don't have an account <Link to="/signup">Signup</Link> </p>
        </>
    )
}

export default Login;