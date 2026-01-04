import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, SetMessage] = useState("");

    const handleChange = async (e) => {
        SetFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
            SetMessage("Signup Completed", res.data);
            console.log(res.data);
        } catch (error) {
            SetMessage(error.response?.data?.message || "Signup Failed")
        }
    }

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />

                <button type="submit">Signup</button>
            </form>
            <p>{message}</p>
            <p>i have an already account <Link to="/login">Login</Link> </p>

        </>
    )
}

export default Signup