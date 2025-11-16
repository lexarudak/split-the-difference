import { TextField, Typography } from "@mui/material";
import type { CostItem } from "../../types";
import styles from "./styles.module.css";

type Props = {
	title: string;
	items: Array<CostItem>;
	disabled?: boolean;
};

const CalculateSection = ({ title, items, disabled }: Props) => {
	return (
		<fieldset className={styles.calculateSection} disabled={disabled}>
			<Typography variant="body1" fontWeight="bold">
				{title}
			</Typography>

			{items.map(({ id, name, amount }) => (
				<div key={id} className={styles.costItem}>
					<TextField
						type="text"
						defaultValue={name}
						variant="standard"
						placeholder="Name"
					/>
					<TextField
						type="number"
						defaultValue={amount}
						className={styles.amountField}
						placeholder="Cost"
						variant="standard"
					/>
				</div>
			))}
		</fieldset>
	);
};

export default CalculateSection;
