// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAnbpGBP0nekd4lqnZN26ttEnFcxosY844",
  authDomain: "sabrina-santos-portfolio.firebaseapp.com",
  projectId: "sabrina-santos-portfolio",
  storageBucket: "sabrina-santos-portfolio.appspot.com",
  messagingSenderId: "242644055407",
  appId: "1:242644055407:web:d7c78e85c28b2128e1249a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to submit contact form data to Firestore
window.submitContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      subscribe: formData.subscribe,
      timestamp: new Date()
    });
    console.log("✅ Documento salvo com ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("❌ Erro ao salvar no Firebase: ", error);
    return false;
  }
};

console.log("All correct");