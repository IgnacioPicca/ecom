import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import getItems from "../../services/items.js";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((respuesta) => {
            setItems(respuesta);
        });
    }, [])

    return (
        <div>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;