import React, { useEffect } from "react";
import Spinner from "../Spinner/Spinner.jsx";
import { useParams } from 'react-router-dom';
import "./orderDetail.css"

function OrderDetail() {
    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/");
        }, 10000);
    }, []);

    const { orderId } = useParams();

    return (
        <>
            <div className="orderDetail">
                <h1>🤍 PiccApple thanks you for your purchase 🤍</h1>
                <br />
                <h2>The id of your purchase is the following: {orderId}</h2>
                <br />
                <h3>We hope to see you again</h3>
                <br />
                <br />
                <h4>Redirecting to home..</h4>
                <Spinner />
            </div>
        </>
    );
}

export default OrderDetail;