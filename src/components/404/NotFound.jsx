import React from "react";
import "./notfound.css";


function NotFound() {
    return (
        <>
            <div className="notfound">
                <h1>The page you're looking for can't be found.</h1>
                <br />
                <h2>Redirecting to home..</h2>
                {/* Spinner */}
            </div>
        </>
    )
}

export default NotFound;