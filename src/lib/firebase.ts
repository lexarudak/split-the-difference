import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC9D9u-HLij2ardxa7WjU-iqFhkh7klw_I",
	authDomain: "split-the-difference-2025.firebaseapp.com",
	projectId: "split-the-difference-2025",
	storageBucket: "split-the-difference-2025.firebasestorage.app",
	messagingSenderId: "883847880291",
	appId: "1:883847880291:web:1884f748230cff33a3e256",
	measurementId: "G-9YLF5XWCL7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
