// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC9D9u-HLij2ardxa7WjU-iqFhkh7klw_I",
	authDomain: "split-the-difference-2025.firebaseapp.com",
	projectId: "split-the-difference-2025",
	storageBucket: "split-the-difference-2025.firebasestorage.app",
	messagingSenderId: "883847880291",
	appId: "1:883847880291:web:1884f748230cff33a3e256",
	measurementId: "G-9YLF5XWCL7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
