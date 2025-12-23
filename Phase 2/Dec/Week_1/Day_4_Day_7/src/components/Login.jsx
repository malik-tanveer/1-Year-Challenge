import { useState } from "react"

function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>
    }
    return <h1> Please Login </h1>
}

const Login = ({ isLoggedIn }) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h1>
            <button onClick={() => setShow(!show)}>Click & Show</button>

            {show && <p>Hello World!</p>}
        </>
    )
}

export default Login