import { useNavigate, useParams } from "react-router";
import styles from "./styles.module.css";
import { RoomsService } from "../../service/rooms-service";
import RoomHeader from "../../components/room-header/RoomHeader";

const RoomPage = () => {
	const { roomId } = useParams();
	const redirect = useNavigate();

	if (!roomId) {
		redirect("/");
	}
	const { name, id } = RoomsService.getRoomById(roomId || "");
	return (
		<div className={styles.page}>
			<RoomHeader id={id} title={name} />
		</div>
	);
};

export default RoomPage;
