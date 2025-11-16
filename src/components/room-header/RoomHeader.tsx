import { IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IosShareIcon from "@mui/icons-material/IosShare";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./styles.module.css";

type Props = {
	id: string;
	title: string;
};

const RoomHeader = ({ id, title }: Props) => {
	const onShare = () => {
		console.log(id);
	};
	return (
		<div className={styles.header}>
			<ul className={styles.list}>
				<li>
					<IconButton
						href="/"
						aria-label="back"
						className={styles.backButton}
						size="large"
					>
						<ArrowBackIcon />
					</IconButton>
				</li>
				<li>
					<IconButton aria-label="share" size="large" onClick={onShare}>
						<IosShareIcon />
					</IconButton>
				</li>
				<li>
					<IconButton aria-label="settings" size="large">
						<SettingsIcon />
					</IconButton>
				</li>
			</ul>
			<Typography variant="h2" fontWeight="bold">
				{title}
			</Typography>
		</div>
	);
};

export default RoomHeader;
