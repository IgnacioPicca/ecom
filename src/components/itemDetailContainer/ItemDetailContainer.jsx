import React, { useState, useEffect, useContext } from "react";
import { getItem } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import "./itemDetailContainer.css";
import ItemCount from "../itemCount/ItemCount.jsx";
import { cartContext } from "../../storage/CartContext.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetailContainer() {
    const [isReady, setReady] = useState(false);
    const [fullCart, setCart] = useState(false);
    const [item, setItem] = useState([]);
    const params = useParams();
    const id = params.id;

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
        setCart(true);
        toast.success(`Agregaste ${cant} ${item.title} al carrito`);
        item.cant = cant;
        addItem(item);
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
                        </div>
                    ) : (
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