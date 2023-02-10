import ".//item.css"
import { Link } from "react-router-dom";

function Item({ title, price, detail, imgurl, id }) {

    const url = `/item/${id}`;

    return (
        <>
            <div className="itemCard">
                <div className="itemCard_img">
                    <img src={imgurl} alt="image"></img>
                </div>
                <div className="itemCard_details">

                    <h2>{title}</h2>

                    <p>{detail}</p>

                    <div className="itemCard_info">

                        <div className="itemCard_price">
                            <span>$ {price}</span>

                            <Link to={url}>
                                <span className="itemCard_link">See more</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;