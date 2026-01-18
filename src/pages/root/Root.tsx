import { Navigate, Outlet, useLocation } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import { RouterPaths } from "../../router/router-constants";
import { useAuthStore } from "../../store/auth-store";
import { selectIsLoading, selectUser } from "../../store/auth-selectors";

export const Root = () => {
	const location = useLocation();
	const user = useAuthStore(selectUser);
	const isLoading = useAuthStore(selectIsLoading);

	if (isLoading) return <LoadingSpinner />;

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
