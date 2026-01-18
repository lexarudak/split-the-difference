import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import { useEffect } from "react";
import { useAuthStore } from "./store/auth-store";
import { selectInitializeAuth } from "./store/auth-selectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			gcTime: 0, // Данные удаляются из кэша сразу
			retry: 1,
		},
	},
});

function App() {
	const initializeAuth = useAuthStore(selectInitializeAuth);

	useEffect(() => {
		const unsubscribe = initializeAuth();
		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
