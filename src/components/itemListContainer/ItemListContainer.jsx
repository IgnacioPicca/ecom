import bg from '../../assets/bg.jpg';
import "./itemListContainer.css"

function ItemListContainer(prop) {
    return (
        <section class="indexSec">

            <p class="greeting">{prop.text}</p>
            <p class="greeting">{prop.subtext}</p>

            <img src={bg} alt="" class="indexBg" />

        </section>
    );
}

export default ItemListContainer;