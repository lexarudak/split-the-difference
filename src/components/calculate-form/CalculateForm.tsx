import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "./styles.module.css";
import type { CalculateFormData, PersonalData } from "../../types";
import IndividualForm from "../individual-form/IndividualForm";

type Props = {
	id: string;
	person1: PersonalData;
	person2: PersonalData;
};

const CalculateForm = ({ id, person1, person2 }: Props) => {
	const { handleSubmit } = useForm<CalculateFormData>();
	const onSubmit: SubmitHandler<CalculateFormData> = (data) =>
		console.log(data, id);
	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<IndividualForm {...person1} />
			<IndividualForm {...person2} />
		</form>
	);
};

export default CalculateForm;
