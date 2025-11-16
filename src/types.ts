export type CostItem = {
	id: string;
	name: string;
	amount: number;
};

export type PersonalData = {
	id: string;
	name: string;
	constantIncome: Array<CostItem>;
	income: Array<CostItem>;
	constantExpenses: Array<CostItem>;
	expenses: Array<CostItem>;
};

export type CalculateFormData = {
	person1: PersonalData;
	person2: PersonalData;
	id: string;
};
