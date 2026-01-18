import { useQuery } from "@tanstack/react-query";
import { RoomsService, type Room } from "../../services/rooms";
import { selectUser } from "../auth-selectors";
import { useAuthStore } from "../auth-store";

export const useUserRooms = () => {
	const user = useAuthStore(selectUser);

	return useQuery<Room[]>({
		queryKey: ["rooms", user?.uid],
		queryFn: () => {
			if (!user?.uid) {
				return Promise.resolve([]);
			}
			return RoomsService().getRoomsByUserId(user.uid);
		},
		enabled: !!user?.uid,
	});
};
