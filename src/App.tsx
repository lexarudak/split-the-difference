import { useAuth } from "./hooks/useAuth";
import LoginPage from "./components/LoginPage";
import MainApp from "./components/MainApp";
import LoadingSpinner from "./components/LoadingSpinner";
import "./config-check";

function App() {
	const { user, loading } = useAuth();

	if (loading) {
		return <LoadingSpinner />;
	}

	if (!user) {
		return <LoginPage />;
	}

	return <MainApp />;
}

export default App;
