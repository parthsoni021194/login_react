import "./Submit.css";
import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        // firstName: '',
        name: '',
        email: '',
        contact: '',
        gender: '',
        password: '',
        about: '',
        skill: ''
    });
    // const [resume, setResume] = useState("");
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("token", JSON.stringify(input));
        navigate("/login");
    };

    const handleReset = () => {
        // Reset all state variables here
        // setInput.firstName("");
        setInput.name("");
        setInput.email("");
        setInput.contact("");
        setInput.gender("");
        setInput.password("");
        setInput.about("");
        setInput.skill("");
        // setResume("");
    };

    return (
        <main className='btn_box'>
            <div className="wrapper">
                <form action="#" method="get" onSubmit={handleSubmit}>
                    <h2>Signin</h2>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    {/* <div className="row-div"> */}
                    {/* <div className="input-data">
                            <input
                                disabled={isSubmitting}
                                type="text"
                                name="firstname"
                                id="firstname"
                                value={input.firstName}
                                onChange={(event) => setInput({ ...input, [event.target.firstName]: event.target.value })}
                                required
                            />
                            <label for="firstname">First Name*</label>
                        </div> */}
                    <div className="input-field">
                        <input
                            type="text"
                            disabled={isSubmitting}
                            name="name"
                            id="name"
                            value={input.name}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                            required
                        />
                        <label for="name">Full Name*</label>
                    </div>
                    {/* </div> */}
                    <div className="row-div">
                        <div className="input-data">
                            <input
                                type="email"
                                disabled={isSubmitting}
                                name="email"
                                id="email"
                                value={input.email}
                                onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                                required
                            />
                            <label for="email">Enter Email* </label>
                        </div>
                        <div className="input-data">
                            <input
                                type="number"
                                name="contact"
                                id="contact"
                                pattern="[0-9.]+"
                                // onInput={"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')"}
                                disabled={isSubmitting}
                                value={input.contact}
                                onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                                required
                            />
                            <label for="tel">Contact*</label>
                        </div>
                    </div>
                    <label for="gender">Gender*</label>
                    <div className="radio">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={input.gender === "male"}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            checked={input.gender === "female"}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                        />
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            id="other"
                            checked={input.gender === "other"}
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                        />
                        Other
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })
                            }
                            // placeholder="Enter url"
                            required
                        />
                        <label>Create Password</label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            name="skill"
                            id="skill"
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })
                            }
                            // placeholder="Enter url"
                            required
                        />
                        <label>Enter your skill</label>
                    </div>
                    <div className="areatext">
                        <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            onChange={(event) => setInput({ ...input, [event.target.name]: event.target.value })}
                            // placeholder="About your self"
                            required
                        ></textarea>
                        <label for="about">About</label>
                    </div>
                    <div className="btnblock">
                        <button type="reset" value="reset" onClick={() => handleReset()}>
                            Reset
                        </button>
                        <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
                            Submit
                        </button>
                    </div>
                    <div className="register">
                        <a href="/login">Already have an account?</a>
                    </div>
                </form>
                {/* </fieldset> */}
            </div>
        </main>
    );
}