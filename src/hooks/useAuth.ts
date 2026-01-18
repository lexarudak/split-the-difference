import { useState, useEffect } from "react";
import {
	onAuthStateChanged,
	signInWithPopup,
	signOut as firebaseSignOut,
	type User,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";

export const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const signInWithGoogle = async () => {
		try {
			setLoading(true);
			await signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.error("Ошибка авторизации:", error);
		} finally {
			setLoading(false);
		}
	};

	const signOut = async () => {
		try {
			await firebaseSignOut(auth);
		} catch (error) {
			console.error("Ошибка выхода:", error);
		}
	};

	return {
		user,
		loading,
		signInWithGoogle,
		signOut,
	};
};
