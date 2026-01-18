import { Navigate, Outlet } from "react-router";
import { selectIsLoading, selectUser } from "../store/auth-selectors";
import LoadingSpinner from "./LoadingSpinner";
import { RouterPaths } from "../router/router-constants";
import { useAuthStore } from "../store/auth-store";

export const ProtectedRoute = () => {
	const isLoading = useAuthStore(selectIsLoading);
	const user = useAuthStore(selectUser);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!user) {
		return <Navigate to={RouterPaths.Login} replace />;
	}

	return <Outlet />;
};
