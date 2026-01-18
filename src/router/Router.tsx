import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/Home";
import RoomPage from "../pages/room-page/RoomPage";
import { RouterPaths } from "./router-constants";
import LoginPage from "../pages/login-page/LoginPage";
import { Root } from "../pages/root/Root";
import RoomList from "../pages/room-list/RoomList";

export const router = createBrowserRouter([
	{
		path: RouterPaths.Home,
		element: <Root />,
		children: [
			{
				path: RouterPaths.BasePath,
				element: <HomePage />,
				children: [
					{
						path: RouterPaths.RoomList,
						element: <RoomList />,
						children: [
							{
								path: RouterPaths.Room,
								element: <RoomPage />,
							},
						],
					},
				],
			},
		],
	},
	{
		path: RouterPaths.Login,
		element: <LoginPage />,
	},
]);
