import React, { useState, useEffect } from 'react'
// import Signin from './Signin';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Handle form submission

    const handleLogin = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const Loggeduser = JSON.parse(localStorage.getItem("token"));
        // Simulating a login API call
        // setTimeout(() => {
        if (input.email === Loggeduser.email && input.password === Loggeduser.password) {
            setIsSubmitting(true);
            // console.log(isSubmitting);
            // alert("Login Successful");
            localStorage.setItem("loggedin", true);
            navigate('/');
            return <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        }
        else {
            setError('Invalid username or password');
            setIsSubmitting(false);
        }
        // }, 2000);
    };
    if (!localStorage.getItem("token")) {
        // navigate('/signin');
        return <Navigate to="/signin" />;  // Prevent form submission if logged in
    }

    return (
        <main className='btn_box'>
            <div className="wrapper">
                <form action="#" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <div className="input-field">
                        <input type="text"
                            name="email"
                            value={input.email}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                            disabled={isSubmitting}
                            required />
                        <label>Enter your email</label>
                    </div>
                    <div className="input-field">
                        <input type="password"
                            name='password'
                            value={input.password}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                            disabled={isSubmitting} required />
                        <label>Enter your password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor="remember">
                            <input type="checkbox" id="remember" />
                            <p>Remember me</p>
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Login'}</button>

                    <div className="register">
                        <p>Don't have an account? <a href="/signin">Register</a></p>
                    </div>
                </form>
            </div>

        </main>
    );

}