import React, { useState, useEffect } from "react";
import { getAllItems } from "../../services/items.js";
import { getCategoryItems } from "../../services/items.js";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;

    async function getItems() {
        setLoading(true);
        if (id === undefined) {
            try {
                let res = await getAllItems();
                setItems(res);
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        } else {
            try {
                let res = await getCategoryItems(id);
                setItems(res);
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        getItems();
    }, [id]);

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <div className="title">
                        <h1>{id ? id : "Products"}</h1>
                    </div>
                    <ItemList items={items} />
                </>
            )}
        </>
    );
}

export default ItemListContainer;