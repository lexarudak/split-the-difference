import { useAuthStore } from "../../store/auth-store";
import styles from "./styles.module.css";
import {
	selectIsLoading,
	selectSignInWithGoogle,
	selectUser,
} from "../../store/auth-selectors";
import { Navigate } from "react-router";
import { RouterPaths } from "../../router/router-constants";
import Button from "../../components/shared/button";

const LoginPage = () => {
	const user = useAuthStore(selectUser);
	const isLoading = useAuthStore(selectIsLoading);
	const signInWithGoogle = useAuthStore(selectSignInWithGoogle);

	if (user) {
		return <Navigate to={RouterPaths.Home} replace />;
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.titleWrapper}>
					<span className={styles.dot}></span>
					split the difference
				</span>
			</h1>
			<Button
				disabled={isLoading}
				onClick={signInWithGoogle}
				variant="no-border"
			>
				Sign in with Google
			</Button>
		</div>
	);
};

export default LoginPage;
