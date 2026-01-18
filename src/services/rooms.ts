import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export type Room = {
	id: string;
	isActive: boolean;
};

export const RoomsService = () => ({
	getRoomsByUserId: async (userId: string): Promise<Room[]> => {
		try {
			const roomsRef = collection(db, "rooms");
			const q = query(roomsRef, where("userId", "==", userId));
			const querySnapshot = await getDocs(q);

			const rooms: Room[] = [];
			querySnapshot.forEach((doc) => {
				rooms.push({
					id: doc.id,
					isActive: doc.data().isActive ?? false,
				});
			});

			return rooms;
		} catch (error) {
			console.error("Ошибка получения комнат:", error);
			return [];
		}
	},
});
