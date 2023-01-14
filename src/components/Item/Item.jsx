import ".//item.css"

function Item({ title, price, detail, imgurl }) {
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
                            {/* <small>$96.00</small>$230.99 */}
                            <h4>USD{price}</h4>
                        </div>

                        <div class="itemCard_links">
                            <a href=""><i class="fa fa-heart"></i></a>
                            <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Item;