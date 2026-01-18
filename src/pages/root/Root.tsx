import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";
import { RouterPaths } from "../../router/router-constants";

export const Root = () => {
	const location = useLocation();
	const { loading, user } = useAuth();

	if (loading) return <LoadingSpinner />;

	const isHomePage = location.pathname === RouterPaths.Home;
	const isProtectedRoute = location.pathname.startsWith(RouterPaths.BasePath);

	if (!user && (isHomePage || isProtectedRoute)) {
		return <Navigate to={RouterPaths.Login} replace />;
	}

	if (isHomePage) {
		return <Navigate to={RouterPaths.RoomList} replace />;
	}

	return <Outlet />;
};
