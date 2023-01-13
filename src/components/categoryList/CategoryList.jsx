import React from "react";
import Category from "../Category/Category";
import iWatch from "../../assets/iWatch.jpg"
import iPad from "../../assets/iPad.jpg"
import iPhone from "../../assets/iPhone.jpg"
import Mac from "../../assets/Mac.jpg"

function CategoryList() {
    return (
        <>
            <Category
                title="iWatch"
                subtitle="Adventure awaits."
                link="Más información."
                imgurl={iWatch}
            />
            <Category
                title="iPad"
                subtitle="Lovable. Drawable. Magical."
                link="Más información."
                imgurl={iPad}
            />
            <Category
                title="iPhone"
                subtitle="Pro. Beyond."
                link="Más información."
                imgurl={iPhone}
            />
            <Category
                title="Mac"
                subtitle="Don't take it lightly."
                link="Más información."
                imgurl={Mac}
            />
        </>
    );
}

export default CategoryList;