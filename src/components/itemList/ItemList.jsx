import Item from "../Item/Item";

function ItemList(props) {
    return (
        <>
            {props.items.map((item) => (
                <Item
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    detail={item.detail}
                    imgurl={item.imgurl}
                />
            ))}
        </>
    );
}

export default ItemList;