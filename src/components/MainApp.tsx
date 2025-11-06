import { useAuth } from "../hooks/useAuth";

const MainApp = () => {
	const { user, signOut } = useAuth();

	return (
		<div
			style={{
				padding: "20px",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<header
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "30px",
					paddingBottom: "20px",
					borderBottom: "1px solid #eee",
				}}
			>
				<h1 style={{ color: "#333" }}>Split the Difference</h1>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "15px",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						{user?.photoURL && (
							<img
								src={user.photoURL}
								alt="Profile"
								style={{
									width: "32px",
									height: "32px",
									borderRadius: "50%",
								}}
							/>
						)}
						<span style={{ color: "#666" }}>
							Привет, {user?.displayName || user?.email}!
						</span>
					</div>

					<button
						onClick={signOut}
						style={{
							padding: "8px 16px",
							fontSize: "14px",
							backgroundColor: "#f5f5f5",
							color: "#333",
							border: "1px solid #ddd",
							borderRadius: "4px",
							cursor: "pointer",
							transition: "all 0.2s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = "#e5e5e5";
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = "#f5f5f5";
						}}
					>
						Выйти
					</button>
				</div>
			</header>

			<main>
				<h2>Добро пожаловать в приложение!</h2>
				<p>Здесь будет основной функционал приложения.</p>
			</main>
		</div>
	);
};

export default MainApp;
