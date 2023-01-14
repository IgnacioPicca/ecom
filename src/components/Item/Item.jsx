import ".//item.css"

function Item({ title, price, detail, imgurl, category }) {
    return (
        <>
            <div class="itemCard">

                <div class="itemCard_img">
                    <img src={imgurl} alt="image"></img>
                </div>

                <div class="itemCard_details">

                    <h2>{title}</h2>

                    <p>{detail}</p>

                    <div class="itemCard_info">

                        <div class="itemCard_price">
                            <span>$ {price}</span>

                            <a href=""><span class="itemCard_link">See more</span></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Item;