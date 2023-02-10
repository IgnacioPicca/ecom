import React, { useEffect } from "react";
import Spinner from "../Spinner/Spinner.jsx";
import "./notfound.css"

function NotFound() {
    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/");
        }, 3000);
    }, []);

    return (
        <>
            <div className="notfound">
                <h1>The page you're looking for can't be found.</h1>
                <br />
                <h2>Redirecting to home..</h2>
                <Spinner />
            </div>
        </>
    );
}

export default NotFound;