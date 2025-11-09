import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";

function App() {
	const theme = createTheme({
		typography: {
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
