import Item from "../Item/Item";
import "./itemList.css"

function ItemList(props) {
    return (
        <>
            <div className="itemList">

                {props.items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        detail={item.detail}
                        imgurl={item.imgurl}
                        category={item.category}
                    />
                ))}

            </div>
        </>
    );
}
export default ItemList;
