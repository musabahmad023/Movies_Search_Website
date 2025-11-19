// Firebase helper: configure with your Firebase project credentials
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore'

// Replace this config with your project's config from Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyDCOk5_U57AQ5fOCTcKH2eUtOFo4mDVJxQ",
    authDomain: "web-programming-001.firebaseapp.com",
    projectId: "web-programming-001",
    storageBucket: "web-programming-001.firebasestorage.app",
    messagingSenderId: "595894730856",
    appId: "1:595894730856:web:f416411bcdef3333cf3bdd",
    measurementId: "G-WEJF2EDJ0N"
};

let db = null
try {
    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)
} catch (e) {
    // init may fail in dev if config not provided — keep null and handle in callers
    console.warn('Firebase not initialized; provide config in env vars to enable Firestore', e)
}

export async function addFeedback(name, message) {
    if (!db) throw new Error('Firestore not initialized')
    console.log("Adding feedback: ", name, message);
    const col = collection(db, 'feedback')
    console.log("Collection: ", col);
    const doc = await addDoc(col, { name, message, createdAt: Timestamp.now() })
    console.log("Doc: ", doc);
    return doc.id
}
