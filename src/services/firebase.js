// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    getDocs,
    where,
    query,
} from "firebase/firestore";

import Toast from "toastify-js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmIQfxRuUs4ZB3SgPCvBlpKNPVbC0skdw",
    authDomain: "piccapple.firebaseapp.com",
    projectId: "piccapple",
    storageBucket: "piccapple.appspot.com",
    messagingSenderId: "954990516618",
    appId: "1:954990516618:web:bdea780910d58b88255073"
};

// Initialize Firebase
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
        console.log(`Error getting item with id ${id}: ${error.message}`)
        throw error;
    }
}

export async function getAllItems() {
    try {
        const productsCollection = collection(db, "products");
        const querySnapshot = await getDocs(productsCollection);
        return querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    } catch (error) {
        Toast.error(`Error getting items`);
        console.log(error.message)
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
        console.log(error.message)
    }
}
