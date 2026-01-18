import { type AuthStoreType } from "./auth-store";

export const selectUser = (state: AuthStoreType) => state.user;
export const selectIsLoading = (state: AuthStoreType) => state.loading;

export const selectSignInWithGoogle = (state: AuthStoreType) =>
	state.signInWithGoogle;
export const selectSignOut = (state: AuthStoreType) => state.signOut;
export const selectInitializeAuth = (state: AuthStoreType) =>
	state.initializeAuth;
