// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC9D9u-HLij2ardxa7WjU-iqFhkh7klw_I",
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "split-the-difference-2025.firebaseapp.com",
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "split-the-difference-2025",
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "split-the-difference-2025.firebasestorage.app",
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "883847880291",
	appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:883847880291:web:1884f748230cff33a3e256",
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-9YLF5XWCL7",
};

// Диагностика для разработки
if (import.meta.env.DEV) {
	console.log('Firebase config source:');
	console.log('Using env vars:', {
		apiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
		authDomain: !!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
		projectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID,
		storageBucket: !!import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: !!import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
		appId: !!import.meta.env.VITE_FIREBASE_APP_ID,
		measurementId: !!import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
	});
}

// Проверяем, что все необходимые значения присутствуют
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
const missingFields = requiredFields.filter(field => !firebaseConfig[field as keyof typeof firebaseConfig]);

if (missingFields.length > 0) {
	console.error('Missing Firebase configuration fields:', missingFields);
	throw new Error(`Firebase configuration is incomplete. Missing: ${missingFields.join(', ')}`);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
