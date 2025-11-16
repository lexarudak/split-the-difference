import { Typography } from "@mui/material";
import type { PersonalData } from "../../types";
import styles from "./styles.module.css";
import CalculateSection from "../calculate-section/CalculateSection";

const IndividualForm = ({
	name,
	constantIncome,
	income,
	constantExpenses,
	expenses,
}: PersonalData) => {
	return (
		<div className={styles.individualForm}>
			<Typography variant="h3" fontWeight="bold" fontSize="medium">
				{name}
			</Typography>
			<CalculateSection title="Income" items={income} />
			<CalculateSection
				title="Constant Income"
				items={constantIncome}
				disabled
			/>
			<CalculateSection title="Expenses" items={expenses} />
			<CalculateSection title="Constant Expenses" items={constantExpenses} />
		</div>
	);
};

export default IndividualForm;
