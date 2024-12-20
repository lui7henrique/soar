import { cn } from "../lib/utils";
import { svgs } from "./icons";

const TRANSACTIONS = [
	{
		label: "Deposit from my Card",
		createdAt: "28 January 2021",
		amount: 850,
		type: "EXPENSE",
		category: "CARD",
	},
	{
		label: "Deposit Paypal",
		createdAt: "25 January 2021",
		amount: 2500,
		type: "INCOME",
		category: "PAYPAL",
	},
	{
		label: "Jemi Wilson",
		createdAt: "21 January 2021",
		amount: 5400,
		type: "INCOME",
		category: "TRANSFER",
	},
] as const;

export function RecentTransaction() {
	const svgByCategory: Record<
		(typeof TRANSACTIONS)[number]["category"],
		JSX.Element
	> = {
		CARD: svgs.cards,
		PAYPAL: svgs.paypal,
		TRANSFER: svgs.transfer,
	};

	return (
		<ul className="bg-background aspect-[350px] h-[235px] rounded-[25px] desktop:p-6 space-y-2.5 overflow-y-auto">
			{TRANSACTIONS.map((transaction) => (
				<li
					className="flex gap-4 items-center justify-between"
					key={transaction.createdAt}
				>
					<div className="flex gap-4 items-center">
						<div
							className={cn(
								"size-[55px] flex items-center justify-center rounded-full",
								transaction.category === "CARD" &&
									"text-[#FFBB38] bg-[#FFF5D9]",
								transaction.category === "PAYPAL" &&
									"text-[#396AFF] bg-[#E7EDFF]",
								transaction.category === "TRANSFER" &&
									"text-[#16DBCC] bg-[#DCFAF8]",
							)}
						>
							{svgByCategory[transaction.category]}
						</div>

						<div>
							<p className="text-foreground font-medium text-sm desktop:text-md">
								{transaction.label}
							</p>
							<p className="text-[#718EBF] text-sm desktop:text-md">
								{transaction.createdAt}
							</p>
						</div>
					</div>

					<p
						className={cn(
							"font-medium text-sm desktop:text-md",
							transaction.type === "INCOME"
								? "text-[#FF4B4A]"
								: "text-[#41D4A8]",
						)}
					>
						{transaction.type === "EXPENSE" ? "-" : "+"}
						{transaction.amount}
					</p>
				</li>
			))}
		</ul>
	);
}
