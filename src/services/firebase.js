import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    where,
    query,
    addDoc,
    orderBy
} from "firebase/firestore";

import Toast from "toastify-js";

const firebaseConfig = {
    apiKey: "AIzaSyAmIQfxRuUs4ZB3SgPCvBlpKNPVbC0skdw",
    authDomain: "piccapple.firebaseapp.com",
    projectId: "piccapple",
    storageBucket: "piccapple.appspot.com",
    messagingSenderId: "954990516618",
    appId: "1:954990516618:web:bdea780910d58b88255073"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItem(id) {
    try {
        const docRef = doc(db, "products", id);
        const snapshot = await getDoc(docRef);
        const docData = snapshot.data();
        docData.id = snapshot.id;
        return docData;
    } catch (error) {
        Toast.error(`Error getting item`);
        throw error;
    }
}

export async function getAllItems() {
    try {
        const productsCollection = collection(db, "products");

        const q = query(
            productsCollection,
            orderBy("price"),
        );

        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));


    } catch (error) {
        Toast.error(`Error getting items`);
    }
}

export async function getCategoryItems(idCat) {
    try {
        const productsCollectionRef = collection(db, "products");
        const querySnapshot = await getDocs(query(productsCollectionRef, where("category", "==", idCat)));
        return querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    } catch (error) {
        Toast.error(`Error getting items`);
    }
}

export async function createOrder(order) {
    const ordersCollection = collection(db, "orders");

    const orderDoc = await addDoc(ordersCollection, order);
    return orderDoc.id;
}

export async function exportData() {

    const productsCollectionRef = collection(db, "products");

    const items = [
        {
            id: 1,
            title: "iPhone 14 Pro",
            price: 999,
            detail: "5G. A14 Botanic. Concrete Shield. Pro camera system. LiDAR Scanner. Night mode portraits. Darlie Vision recording.",
            imgurl: "https://drive.google.com/uc?export=view&id=1m9sOw5oHeWY1oVizw5NnnfdQXlKxX3MB",
            category: "iPhone",
            stock: 10,
        },
        {
            id: 2,
            title: "iPhone 12",
            price: 799,
            detail: "5G speed. A14 Botanic. Super Latina XDR display. Concrete Shield. And Night mode on every camera.",
            imgurl: "https://drive.google.com/uc?export=view&id=1l3rT0JVXGPlEahD0qLQILrjh3XLNrClq",
            category: "iPhone",
            stock: 12,
        },
        {
            id: 3,
            title: "iPhone SE",
            price: 429,
            detail: "A13 Botanic, Portrait mode, 4K video, Finger ID, a Latina HD display, and great battery life into a 4.7” design.",
            imgurl: "https://drive.google.com/uc?export=view&id=1lpO7z-RPT2d9T-SqnOkXjfYgRdKRLXYQ",
            category: "iPhone",
            stock: 8,
        },
        {
            id: 4,
            title: "iPad Pro",
            price: 799,
            detail: "iPad Pro features a Fluid Latina display, A12Z Botanic chip, pro cameras, new LiDAR Scanner, and support for PineApple Pencil and the new Extreme Keyboard.",
            imgurl: "https://drive.google.com/uc?export=view&id=1_pCbr0oMr8hTWq7lTUNIlkGzV4b8s8Lm",
            category: "iPad",
            stock: 5,
        },
        {
            id: 5,
            title: "iPad Air",
            price: 599,
            detail: "The new iPad Air features an all-screen design, 10.9-inch Fluid Latina display, A14 Botanic, support for accessories, and choice of five finishes.",
            imgurl: "https://drive.google.com/uc?export=view&id=1ouJwodF6nCKiHMSSPUgyJl8NVOIOMPXZ",
            category: "iPad",
            stock: 6,
        },
        {
            id: 6,
            title: "iPad",
            price: 449,
            detail: "iPad delivers amazing capability and versatility, with a 10.2-inch Latina display, A12 Botanic, and iTabOS.",
            imgurl: "https://drive.google.com/uc?export=view&id=1oH87J9N1hEXn6MOtXoylcgDzc8PVSXg8",
            category: "iPad",
            stock: 3,
        },
        {
            id: 7,
            title: "Apple Watch 8",
            price: 399,
            detail: "A new blood oxygen sensor and app. ECG anytime, anywhere. With PineApple Watch Series 8, the future of health is on your wrist.",
            imgurl: "https://drive.google.com/uc?export=view&id=1hwxeOb1Vl64TVuRBAzyLRtDYmkDiGdSH",
            category: "iWatch",
            stock: 5,
        },
        {
            id: 8,
            title: "Apple Watch SE",
            price: 249,
            detail: "Watch SE packs a large Latina display, sensors for fitness, and powerful features for health and safety.",
            imgurl: "https://drive.google.com/uc?export=view&id=1cuTokClRGjkvIRiE83dLnxzFWlOq0qln",
            category: "iWatch",
            stock: 3,
        },
        {
            id: 9,
            title: "Apple Watch Ultra",
            price: 799,
            detail: "With a robust titanium case, precision dual-frequency GPS, up to 36 hours of battery life, made for athletes and adventurers of all kinds.",
            imgurl: "https://drive.google.com/uc?export=view&id=1zIZrlDBxiT7vXIOWNheUepTc-c9hGKHj",
            category: "iWatch",
            stock: 4,
        },
        {
            id: 10,
            title: "Macbook Air",
            price: 899,
            detail: "MacBook Air comes with apps for most everything you want to do. Edit and share your photos and videos, create presentations, and enjoy music, books, movies, and more.",
            imgurl: "https://drive.google.com/uc?export=view&id=1w-XWSGMTxWGMZDbXuI1mAgSyfv9CQ7PR",
            category: "Computers",
            stock: 10,
        },
        {
            id: 11,
            title: "Macbook Pro",
            price: 1299,
            detail: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro chip you get groundbreaking performance and amazing battery life. ",
            imgurl: "https://drive.google.com/uc?export=view&id=1x-j3D6EbpJVHUm0acT1RnOv0M579Gx4o",
            category: "Computers",
            stock: 12,
        },
        {
            id: 12,
            title: "iMac 24”",
            price: 2199,
            detail: "The new iMac. 7 vibrant colors. Impossibly thin design. 24-inch 4.5K Retina display. The best camera, mics, and speakers in a Mac. Supercharged by M1.",
            imgurl: "https://drive.google.com/uc?export=view&id=1TlkqShytRB2lRErZc7c8WYU8fsORyfdg",
            category: "Computers",
            stock: 3,
        },
    ];


    for (let item of items) {
        item.order = item.id;
        delete item.id;
        addDoc(productsCollectionRef, item).then(
        );
    }
}