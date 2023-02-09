import { createContext, useState } from "react";


export const cartContext = createContext();

export function CartContextProvider(props) {

    let [cart, setCart] = useState([]);

    function addItem(item) {
        let index = -1;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === item.id) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            setCart([...cart, item]);
        } else {
            alert("Ya hay un item igual");  //IMPLEMENTAR TOSTIFY
        }
    }

    function removeItem(idItem) {

        let newCart = [...cart]

        for (let i in newCart) {

            if (newCart[i].id === idItem) {
                newCart.splice(i, 1);
                break;
            }
        }

        setCart(newCart);
    }

    function clear() {
        setCart([]);
    }

    function totalItemsCart() {
        let total = 0;
        cart.forEach((item) => (total += item.count));
        return total;
    }

    function getTotalPrice(cart) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].cant * cart[i].price);
        }
        return total;
    }

    const val = {
        cart,
        addItem,
        removeItem,
        clear,
        totalItemsCart,
        getTotalPrice,
    };

    return (
        <cartContext.Provider value={val}>{props.children}</cartContext.Provider>
    );

}