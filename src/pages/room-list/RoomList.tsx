import { useUserRooms } from "../../store/queries/useUserRooms";
import styles from "./styles.module.css";

const RoomList = () => {
	const { data: rooms = [], isLoading, error } = useUserRooms();

	if (isLoading) {
		return <div>Загрузка комнат...</div>;
	}

	if (error) {
		return <div>Ошибка загрузки комнат</div>;
	}

	console.log(rooms);

	return (
		<ul className={styles.list}>
			{rooms.map(({ id, isActive }) => (
				<li key={id} className={styles.item}>
					<a href={`/c/rooms/${id}`} className={styles.button}>
						Room {id} {isActive ? "✓" : ""}
					</a>
				</li>
			))}
			<li className={styles.item}>
				<button className={styles.button}>Add Room</button>
			</li>
			{rooms.length === 0 && (
				<li className={styles.item}>Комнаты не найдены</li>
			)}
		</ul>
	);
};

export default RoomList;
