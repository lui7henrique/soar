import { v4 } from "uuid";

import liviaBator from "@/assets/livia-bator.png";
import randyPress from "@/assets/randy-press.png";
import workman1 from "@/assets/workman-1.png";
import workman2 from "@/assets/workman-2.png";
import workman3 from "@/assets/workman-3.png";

export const MOCK_CREDIT_CARDS = [
	{
		id: v4(),
		balance: 5756,
		holder: "Eddy Cusuma",
		validThru: "12/22",
		number: "3778 **** **** 1234",
		main: true,
	},
	{
		id: v4(),
		balance: 5756,
		holder: "Eddy Cusuma",
		validThru: "12/22",
		number: "3778 **** **** 1234",
		main: false,
	},
] as const;

export const MOCK_TRANSACTIONS = [
	{
		id: v4(),
		label: "Deposit from my Card",
		createdAt: "28 January 2021",
		amount: 850,
		type: "EXPENSE",
		category: "CARD",
	},
	{
		id: v4(),
		label: "Deposit Paypal",
		createdAt: "25 January 2021",
		amount: 2500,
		type: "INCOME",
		category: "PAYPAL",
	},
	{
		id: v4(),
		label: "Jemi Wilson",
		createdAt: "21 January 2021",
		amount: 5400,
		type: "INCOME",
		category: "TRANSFER",
	},
	{
		id: v4(),
		label: "Jemi Wilson",
		createdAt: "21 January 2021",
		amount: 5400,
		type: "INCOME",
		category: "TRANSFER",
	},
] as const;

export const MOCK_WEEKLY_ACTIVITY = [
	{ day: "Sat", withdraw: 450, deposit: 220 },
	{ day: "Sun", withdraw: 320, deposit: 120 },
	{ day: "Mon", withdraw: 300, deposit: 250 },
	{ day: "Tue", withdraw: 450, deposit: 350 },
	{ day: "Wed", withdraw: 150, deposit: 220 },
	{ day: "Thu", withdraw: 400, deposit: 230 },
	{ day: "Fri", withdraw: 380, deposit: 320 },
];

export const MOCK_EXPENSE_STATISTICS = [
	{ name: "Entertainment", value: 30 },
	{ name: "Investment", value: 20 },
	{ name: "Bill Expense", value: 30 },
	{ name: "Others", value: 15 },
];

export const LAST_TRANSFERS = [
	{
		id: v4(),
		name: "Livia Bator",
		role: "CEO",
		image: liviaBator,
	},
	{
		id: v4(),
		name: "Randy Press",
		role: "Director",
		image: randyPress,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman1,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman2,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman3,
	},
] as const;

export const BALANCE_HISTORY = [
	{ month: "Jul", balance: 150 },
	{ month: "Aug", balance: 315 },
	{ month: "Sep", balance: 450 },
	{ month: "Oct", balance: 750 },
	{ month: "Nov", balance: 250 },
	{ month: "Dec", balance: 550 },
	{ month: "Jan", balance: 650 },
];
