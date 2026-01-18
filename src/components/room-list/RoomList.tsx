import { RoomsService } from "../../service/rooms-service";
import styles from "./styles.module.css";

const RoomList = () => {
	const rooms = RoomsService.getRoomsList();
	console.log("ss");

	return (
		<ul className={styles.list}>
			{rooms.map(({ id, name }) => (
				<li key={id} className={styles.item}>
					<a href={`/c/room/${id}`} className={styles.button}>
						{name}
					</a>
				</li>
			))}
			<li className={styles.item}>
				<button className={styles.button}>Add Room</button>
			</li>
		</ul>
	);
};

export default RoomList;
