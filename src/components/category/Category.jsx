import "./category.css"


function Category({ title, subtitle, link, imgurl }) {

    return (

        <div class="categoryBox">

            <h3 class="categoryTitle">{title}</h3>
            <h4 class="categorySubtitle">{subtitle}</h4>
            <p class="categoryLink">{link}</p>
            <img src={imgurl} alt="" class="categoryImg" />

        </div>
    );
}

export default Category;