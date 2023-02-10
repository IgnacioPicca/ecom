import { createContext, useState } from "react";
import { toast } from "toastify-js";


export const cartContext = createContext();

export function CartContextProvider(props) {

    let [cart, setCart] = useState([]);


    //COMPROBAR QUE NO AGREGUE EL MISMO ITEM 2 VECES
    function addItem(item) {
        const existingItem = cart.find((i) => i.id === item.id);

        if (!existingItem) {
            setCart([...cart, item]);
        } else {
            toast.error("Ya hay un item igual en el carrito");
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