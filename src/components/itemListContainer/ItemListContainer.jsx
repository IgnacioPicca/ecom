import React, { useState, useEffect } from "react";
import getAllItems from "../../services/items.js";
import getCategoryItems from "../../services/items.js";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer() {

    const [items, setItems] = useState([]);
    const params = useParams()
    const id = params.id;

    async function getItems() {

        if (id === undefined) {
            try {
                let res = await getAllItems();
                setItems(res);
            } catch (error) {
                alert(error);
            }
        } else {
            let res = await getCategoryItems(id);
            setItems(res);
        }
    }

    useEffect(() => {
        getItems();
    }, [id]);


    return (
        <>
            <ItemList items={items} />
        </>
    );
}

export default ItemListContainer;