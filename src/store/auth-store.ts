import { create } from "zustand";
import {
	onAuthStateChanged,
	signInWithPopup,
	signOut as firebaseSignOut,
	type User,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";

interface AuthStore {
	user: User | null;
	loading: boolean;
	signInWithGoogle: () => Promise<void>;
	signOut: () => Promise<void>;
	initializeAuth: () => () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	loading: true,

	initializeAuth: () => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			set({ user, loading: false });
		});
		return unsubscribe;
	},

	signInWithGoogle: async () => {
		try {
			set({ loading: true });
			await signInWithPopup(auth, googleProvider);
		} catch (error) {
			console.error("Ошибка авторизации:", error);
		} finally {
			set({ loading: false });
		}
	},

	signOut: async () => {
		try {
			await firebaseSignOut(auth);
		} catch (error) {
			console.error("Ошибка выхода:", error);
		}
	},
}));

export type AuthStoreType = ReturnType<typeof useAuthStore.getState>;
