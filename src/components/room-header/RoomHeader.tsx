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
					<a href="/" aria-label="back" className={styles.backButton}>
						←
					</a>
				</li>
				<li>
					<button aria-label="share" onClick={onShare}>
						↑
					</button>
				</li>
				<li>
					<button aria-label="settings">⚙</button>
				</li>
			</ul>
			<h2>{title}</h2>
		</div>
	);
};

export default RoomHeader;
