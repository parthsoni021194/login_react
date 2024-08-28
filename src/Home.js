import React from 'react'
import { Navigate } from 'react-router-dom';
export default function Home() {
    const uName = JSON.parse(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />;
    }
    else {
        return (
            <>
                <h2>Home</h2>
                <h3>Welcome - {uName.name}</h3>
                {/* <div class="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}

            </>
        )
    }
}


