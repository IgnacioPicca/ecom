import React, { useState, useEffect } from "react";
import { getItem } from "../../services/items.js";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import ItemCount from "../itemCount/ItemCount.jsx";


function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    const params = useParams()
    const id = params.id;

    async function getItemAsync() {
        let res = await getItem(id);
        setItem(res);
    }

    useEffect(() => {
        getItemAsync();
    }, [])


    return (

        <div className="cardDetail">

            <div className="cardDetail_img">
                <img src={item.imgurl} alt="img" />
            </div>

            <div className="cardDetail_details">

                <h1 className="cardDetail_title">{item.title}</h1>
                <h2 className="cardDetail_price">$ {item.price}</h2>
                <p>{item.detail}</p>
                <div className="cardDetail_buttons">
                    <button className="cardDetail_details_cart">ADD TO CART</button>
                    <ItemCount start={0} stock={item.stock} />
                </div>
            </div>

        </div>

    );
}

export default ItemDetailContainer;


