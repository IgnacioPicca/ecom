import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getItem } from "../../services/firebase";
import { cartContext } from "../../storage/CartContext.jsx";
import ItemCount from "../itemCount/ItemCount.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./itemDetailContainer.css";

function ItemDetailContainer() {
    const [isReady, setReady] = useState(false);
    const [fullCart, setCart] = useState(false);
    const [item, setItem] = useState([]);
    const { findItem } = useContext(cartContext);

    const params = useParams();
    const id = params.id;

    const itemFind = findItem(item.id);

    let realStock;

    if (itemFind) {
        realStock = item.stock - itemFind.cant;
    }
    else {
        realStock = item.stock;
    }

    async function getItemAsync() {
        try {
            let res = await getItem(id);
            setItem(res);
        } catch (error) {
            console.error(error);
        } finally {
            setReady(false);
        }
    }

    useEffect(() => {
        getItemAsync();
    }, []);

    const { addItem } = useContext(cartContext);

    function addToCart(cant) {
        item.cant = cant;
        addItem(item);
        if (addItem(item)) {
            toast.success("The product has been added to your cart");
            setCart(true);
        }
        else {
            toast.error("The product is already in your cart");
        }
    }

    if (isReady) return <Spinner />;

    return (
        <>
            <div className="cardDetail">
                <div className="cardDetail_img">
                    <img src={item.imgurl} alt="img" />
                </div>

                <div className="cardDetail_details">
                    <h1 className="cardDetail_title">{item.title}</h1>
                    <h2 className="cardDetail_price">$ {item.price}</h2>
                    <p className="cardInfo">{item.detail}</p>
                    {fullCart === false ? (
                        <div className="cardDetail_buttons">
                            <ItemCount addToCart={addToCart} start={0} stock={item.stock} />
                        </div>)
                        : (
                            <>
                                <Link to="/cart">
                                    <button className="goCartBtn">Go to cart</button>
                                </Link>

                                <p className="cartInfo">The product has been added to your cart</p>
                            </>
                        )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default ItemDetailContainer;