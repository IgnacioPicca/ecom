import React, { useState, useEffect } from "react";
import { getAllItems, getCategoryItems } from "../../services/firebase";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner.jsx";
import { toast } from "react-toastify";

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;

    async function getData() {
        try {
            setLoading(true);
            const res = id === undefined ? await getAllItems() : await getCategoryItems(id);
            setItems(res);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
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