import { Typography } from "@mui/material";
import { useAuthStore } from "../../store/auth-store";
import Button from "@mui/material/Button";
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
			<Typography variant="h2" className={styles.title}>
				Split the Difference
			</Typography>
			<Typography variant="body2" className={styles.subtitle}>
				Войдите, чтобы продолжить
			</Typography>
			<Button
				variant="contained"
				loading={isLoading}
				onClick={signInWithGoogle}
			>
				Войти через Google
			</Button>
		</div>
	);
};

export default LoginPage;
