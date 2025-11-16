import LoadingSpinner from "../../components/LoadingSpinner";
import RoomList from "../../components/room-list/RoomList";
import { useAuth } from "../../hooks/useAuth";
import LoginPage from "../login-page/LoginPage";

const HomePage = () => {
	const { user, loading } = useAuth();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (!user) {
		return <LoginPage />;
	}

	return <RoomList />;
};

export default HomePage;
