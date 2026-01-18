import { useAuthStore } from "../../store/auth-store";
import styles from "./styles.module.css";
import {
	selectIsLoading,
	selectSignInWithGoogle,
	selectUser,
} from "../../store/auth-selectors";
import { Navigate } from "react-router";
import { RouterPaths } from "../../router/router-constants";

const LoginPage = () => {
	const user = useAuthStore(selectUser);
	const isLoading = useAuthStore(selectIsLoading);
	const signInWithGoogle = useAuthStore(selectSignInWithGoogle);

	if (user) {
		return <Navigate to={RouterPaths.Home} replace />;
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Split the Difference</h2>
			<p className={styles.subtitle}>Войдите, чтобы продолжить</p>
			<button disabled={isLoading} onClick={signInWithGoogle}>
				{isLoading ? "Загрузка..." : "Войти через Google"}
			</button>
		</div>
	);
};

export default LoginPage;
