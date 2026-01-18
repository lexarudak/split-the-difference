import { RoomsService } from "../../service/rooms-service";
import styles from "./styles.module.css";
import { Button } from "@mui/material";

const RoomList = () => {
	const rooms = RoomsService.getRoomsList();
	console.log("ss");

	return (
		<ul className={styles.list}>
			{rooms.map(({ id, name }) => (
				<li key={id} className={styles.item}>
					<Button
						href={`/c/room/${id}`}
						variant="contained"
						className={styles.button}
					>
						{name}
					</Button>
				</li>
			))}
			<li className={styles.item}>
				<Button variant="outlined" className={styles.button}>
					Add Room
				</Button>
			</li>
		</ul>
	);
};

export default RoomList;
