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
			<p>
				<strong>{title}</strong>
			</p>

			{items.map(({ id, name, amount }) => (
				<div key={id} className={styles.costItem}>
					<input type="text" defaultValue={name} placeholder="Name" />
					<input
						type="number"
						defaultValue={amount}
						className={styles.amountField}
						placeholder="Cost"
					/>
				</div>
			))}
		</fieldset>
	);
};

export default CalculateSection;
