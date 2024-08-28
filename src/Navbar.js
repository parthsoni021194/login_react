import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../logoipsum.svg'
// import { ReactComponent as Brand } from '../logo.svg'
import '../CSS/Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [click, setClick] = useState(false)
    const [user, setUser] = useState({});

    useEffect(() => {
        setInterval(() => {
            const userString = localStorage.getItem("token");
            const user = JSON.parse(userString);
            setUser(user);
        }, [])
    }, 1000);

    const logout = () => {
        return localStorage.removeItem("token"), localStorage.removeItem("loggedin");
    }
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    if (!user) {
        return (
            <nav className='navbar '>
                <div className='container'>
                    {/* <div className="logo">
                    <Brand />
                </div> */}
                    <div className="menu-icon">
                        <Hamburger />
                    </div>
                    <div
                        // className={click ? `nav-elements  ${showNavbar && 'active'}` : 'nav-elements'}
                        className={`nav-elements  ${showNavbar && 'active'}`}
                        onClick={() => setClick(prevState => !prevState)}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signin">Signin</NavLink>
                            </li>

                            <li>
                                <NavLink to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/calculator">Calculator</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    if (user) {
        return (
            <nav className='navbar '>
                <div className='container'>
                    {/* <div className="logo">
                    <Brand />
                </div> */}
                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <Hamburger />
                    </div>
                    <div
                        // className={click ? `nav-elements  ${showNavbar && 'active'}` : 'nav-elements'}
                        className={`nav-elements  ${showNavbar && 'active'}`}
                        onClick={() => setClick(prevState => !prevState)}>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signin">Signin</NavLink>
                            </li>

                            <li>
                                <NavLink to="/" onClick={logout}>Logout</NavLink>
                            </li>

                            <li>
                                <NavLink to="/calculator">Calculator</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar