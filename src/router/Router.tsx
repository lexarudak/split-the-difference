import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/Home";
import RoomPage from "../pages/room-page/RoomPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/room/:roomId",
		element: <RoomPage />,
	},
]);
