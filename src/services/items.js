import iPhone14pro from "./iPhone14pro.jpg";
import iPhone14 from "./iPhone14.jpg";
import iPhoneSE from "./iPhoneSE.jpg";

const products = [
    {
        id: 1,
        title: "iPhone14 pro",
        price: 1450,
        detail: "5G. A14 Botanic. Concrete Shield. Pro camera system. LiDAR Scanner. Night mode portraits. Darlie Vision recording.",
        imgurl:
            iPhone14pro,
    },
    {
        id: 2,
        title: "iPhone14",
        price: 800,
        detail: "5G speed. A14 Botanic. Super Latina XDR display. Concrete Shield. And Night mode on every camera.",
        imgurl: iPhone14,
    },
    {
        id: 3,
        title: "iPhoneSE",
        price: 500,
        detail: "A13 Botanic, Portrait mode, 4K video, Finger ID, a Latina HD display, and great battery life into a 4.7” design.",
        imgurl: iPhoneSE,
    },
];

function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

export default getItems;
