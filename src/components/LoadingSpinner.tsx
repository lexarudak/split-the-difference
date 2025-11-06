const LoadingSpinner = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<div
				style={{
					width: "40px",
					height: "40px",
					border: "4px solid #f3f3f3",
					borderTop: "4px solid #4285f4",
					borderRadius: "50%",
					animation: "spin 1s linear infinite",
					marginBottom: "20px",
				}}
			></div>

			<p style={{ color: "#666" }}>Загрузка...</p>

			<style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
		</div>
	);
};

export default LoadingSpinner;
