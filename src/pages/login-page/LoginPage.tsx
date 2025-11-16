import { Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const LoginPage = () => {
	const { signInWithGoogle, loading } = useAuth();

	return (
		<div className={styles.container}>
			<Typography variant="h2" className={styles.title}>
				Split the Difference
			</Typography>
			<Typography variant="body2" className={styles.subtitle}>
				Войдите, чтобы продолжить
			</Typography>
			<Button variant="contained" loading={loading} onClick={signInWithGoogle}>
				Войти через Google
			</Button>
		</div>
	);
};

export default LoginPage;
