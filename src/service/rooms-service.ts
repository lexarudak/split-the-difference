export const RoomsService = {
	getRoomsList: () => {
		// Placeholder for fetching room data from an API or database
		return [
			{ id: "1", name: "Room A" },
			{ id: "very long room name", name: "Room B" },
			{ id: "3", name: "Room C" },
		];
	},

	getRoomById: (roomId: string) => {
		return {
			id: roomId,
			name: `Room ${roomId}`,
			person1: {
				id: "1",
				name: "Person 1",
				constantIncome: [{ id: "1", name: "Minsk Rent", amount: 5000 }],
				income: [{ id: "1", name: "Freelance Project", amount: 1200 }],
				constantExpenses: [
					{ id: "1", name: "Rent", amount: 300 },
					{ id: "2", name: "Kindergarten", amount: 150 },
				],
				expenses: [{ id: "1", name: "Phone", amount: 1500 }],
			},

			person2: {
				id: "2",
				name: "Person 2",
				constantIncome: [],
				income: [],
				constantExpenses: [
					{ id: "1", name: "Rent", amount: 300 },
					{ id: "2", name: "Kindergarten", amount: 150 },
				],
				expenses: [{ id: "1", name: "Phone", amount: 1500 }],
			},
		};
	},
};
