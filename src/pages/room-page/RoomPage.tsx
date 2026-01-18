import { Navigate, useParams } from "react-router";
import styles from "./styles.module.css";
import { RoomsService } from "../../service/rooms-service";
import RoomHeader from "../../components/room-header/RoomHeader";
import CalculateForm from "../../components/calculate-form/CalculateForm";
import { RouterPaths } from "../../router/router-constants";

const RoomPage = () => {
	const { roomId } = useParams();

	if (!roomId) {
		return <Navigate to={RouterPaths.Home} replace />;
	}

	const { name, id, ...roomData } = RoomsService.getRoomById(roomId || "");
	return (
		<div className={styles.page}>
			<RoomHeader id={id} title={name} />
			<CalculateForm {...roomData} id={id} />
		</div>
	);
};

export default RoomPage;
