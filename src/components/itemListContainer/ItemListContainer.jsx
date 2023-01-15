import React, { useState, useEffect } from "react";
import getItems from "../../services/items.js";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then((res) => {
            setItems(res);
        });
    }, [])

    return (
        <>
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;