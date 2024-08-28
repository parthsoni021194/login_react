import React from 'react'
import { Navigate } from 'react-router-dom';
import Group from './Group';
// import ColorBox from './ColorBox';
// import { months, calcButtonTextColor } from '../tools';

export default function Profile() {
    const uName = JSON.parse(localStorage.getItem("token"));
    // const handleChange = (e) => {
    //     setData(e.target.value);
    // }

    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />;
    }
    else {
        return (
            <>
                <h2 style={{ textShadow: '2px 2px #000' }}> User Profile</h2>
                {/* <h3 style={{ textAlign: "right" }}>Hello, {uName.name}</h3> */}
                <div className='profile'>
                    <Group>
                        <h2>Name:</h2> {uName.name}
                    </Group>
                    <Group>
                        <h2>Email:</h2> {uName.email}
                    </Group>
                    <Group>
                        <h2>Contact:</h2> {uName.contact}
                    </Group>
                    <Group>
                        <h2>Gender:</h2> {uName.gender}
                    </Group>
                    <Group>
                        <h2>Skills:</h2> {uName.skill}
                    </Group>
                    <Group>
                        <h2>About:</h2> {uName.about}
                    </Group>
                </div>
            </>
        )
    }
}
