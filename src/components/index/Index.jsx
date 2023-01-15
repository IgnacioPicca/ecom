import React from "react";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import "./index.css";


function Index() {
    return (
        <>
            <div className="title">
                <h1>Products</h1>
            </div>
            <ItemListContainer />
        </>
    )
}

export default Index;