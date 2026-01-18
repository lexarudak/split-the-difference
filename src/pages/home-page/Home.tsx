import { Outlet } from "react-router";
import { selectSignOut } from "../../store/auth-selectors";
import { useAuthStore } from "../../store/auth-store";

const HomePage = () => {
	const signOut = useAuthStore(selectSignOut);

	return (
		<>
			<header>
				<button onClick={signOut}>Sign Out</button>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default HomePage;
