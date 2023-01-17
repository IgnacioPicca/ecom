import iPhone14pro from "./assets/iPhone14pro.jpg";
import iPhone14 from "./assets/iPhone14.jpg";
import iPhoneSE from "./assets/iPhoneSE.jpg";
import iPadPro from "./assets/iPadPro.jpg";
import iPadAir from "./assets/iPadAir.jpg";
import iPad from "./assets/iPad.jpg";
import watch8 from "./assets/watch8.jpg";
import watchSE from "./assets/watchSE.jpg";
import watchUltra from "./assets/watchUltra.jpg";
import MacBookAir from "./assets/MacBookAir.jpg";
import MacBookPro from "./assets/MacBookPro.jpg";
import Imac from "./assets/iMac.jpg";

const items = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        price: 999,
        detail: "5G. A14 Botanic. Concrete Shield. Pro camera system. LiDAR Scanner. Night mode portraits. Darlie Vision recording.",
        imgurl:
            iPhone14pro,
        category: "iPhone",
        stock: 10,
    },
    {
        id: 2,
        title: "iPhone 14",
        price: 799,
        detail: "5G speed. A14 Botanic. Super Latina XDR display. Concrete Shield. And Night mode on every camera.",
        imgurl: iPhone14,
        category: "iPhone",
        stock: 12,
    },
    {
        id: 3,
        title: "iPhone SE",
        price: 429,
        detail: "A13 Botanic, Portrait mode, 4K video, Finger ID, a Latina HD display, and great battery life into a 4.7” design.",
        imgurl: iPhoneSE,
        category: "iPhone",
        stock: 8,
    },
    {
        id: 4,
        title: "iPad Pro",
        price: 799,
        detail: "iPad Pro features a Fluid Latina display, A12Z Botanic chip, pro cameras, new LiDAR Scanner, and support for PineApple Pencil and the new Extreme Keyboard.",
        imgurl: iPadPro,
        category: "iPad",
        stock: 5,
    },
    {
        id: 5,
        title: "iPad Air",
        price: 599,
        detail: "The new iPad Air features an all-screen design, 10.9-inch Fluid Latina display, A14 Botanic, support for accessories, and choice of five finishes.",
        imgurl: iPadAir,
        category: "iPad",
        stock: 6,
    },
    {
        id: 6,
        title: "iPad",
        price: 449,
        detail: "iPad delivers amazing capability and versatility, with a 10.2-inch Latina display, A12 Botanic, and iTabOS.",
        imgurl: iPad,
        category: "iPad",
        stock: 3,
    },
    {
        id: 7,
        title: "Apple Watch 8",
        price: 399,
        detail: "A new blood oxygen sensor and app. ECG anytime, anywhere. With PineApple Watch Series 8, the future of health is on your wrist.",
        imgurl: watch8,
        category: "iWatch",
        stock: 5,
    },
    {
        id: 8,
        title: "Apple Watch SE",
        price: 249,
        detail: "Watch SE packs a large Latina display, sensors for fitness, and powerful features for health and safety.",
        imgurl: watchSE,
        category: "iWatch",
        stock: 3,
    },
    {
        id: 9,
        title: "Apple Watch Ultra",
        price: 799,
        detail: "With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life, made for athletes and adventurers of all kinds.",
        imgurl: watchUltra,
        category: "iWatch",
        stock: 4,
    },
    {
        id: 10,
        title: "Macbook Air",
        price: 899,
        detail: "MacBook Air comes with apps for most everything you want to do. Edit and share your photos and videos, create presentations, and enjoy music, books, movies, and more.",
        imgurl: MacBookAir,
        category: "Computers",
        stock: 10,
    },
    {
        id: 11,
        title: "Macbook Pro",
        price: 1299,
        detail: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro chip you get groundbreaking performance and amazing battery life. ",
        imgurl: MacBookPro,
        category: "Computers",
        stock: 12,
    },
    {
        id: 12,
        title: "iMac 24”",
        price: 2199,
        detail: "The new iMac. 7 vibrant colors. Impossibly thin design. 24-inch 4.5K Retina display. The best camera, mics, and speakers in a Mac. Supercharged by M1.",
        imgurl: Imac,
        category: "Computers",
        stock: 3,
    },
];

export function getAllItems() {
    return new Promise((res) => {
        setTimeout(() => {
            res(items);
        }, 500);
    });
}

export default getAllItems;


export function getItem(id) {

    let itemRequired = items.find((item) => {
        return item.id == id;
    })

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id !== undefined) res(itemRequired);
            else rej("No existe el elemento")
        }, 200);
    });
}

export function getCategoryItems(idCat) {

    let itemsCategory = items.filter((item) => item.category === idCat);

    return new Promise((res, rej) => {
        setTimeout(() => {
            if (itemsCategory !== undefined) res(itemsCategory);
            else rej("No existe la categoria")
        }, 200);
    });
}

