import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";
import { RouterPaths } from "../router/router-constants";

export const ProtectedRoute = () => {
	const { loading, user } = useAuth();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (!user) {
		return <Navigate to={RouterPaths.Login} replace />;
	}

	return <Outlet />;
};
