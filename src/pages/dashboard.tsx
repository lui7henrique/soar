import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { CreditCard } from "../components/credit-card";
import { RecentTransaction } from "../components/recent-transaction";
import { WeeklyActivity } from "../components/weekly-activity";
import { ExpenseStatistics } from "../components/expense-statistics";

const Card = {
	Root: ({ className, ...props }: ComponentProps<"div">) => (
		<div className={cn(className, "space-y-5")} {...props} />
	),
	Header: ({ className, ...props }: ComponentProps<"div">) => (
		<div className={cn(className, "flex justify-between")} {...props} />
	),
	Title: ({ className, ...props }: ComponentProps<"div">) => (
		<h4
			className={cn(
				className,
				"font-semibold text-[22px] text-muted-foreground",
			)}
			{...props}
		/>
	),
	Action: ({ className, ...props }: ComponentProps<"div">) => (
		<span
			className={cn(
				className,
				"font-semibold text-[22px] text-muted-foreground",
			)}
			{...props}
		/>
	),
};

export function Dashboard() {
	return (
		<div className="grid grid-cols-3 px-10 py-6 gap-8 max-w-[1180px] mx-auto">
			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>My Cards</Card.Title>

					<Card.Action>
						<Link to="/credit-cards">See all</Link>
					</Card.Action>
				</Card.Header>

				<div className="grid grid-cols-2 gap-8">
					<CreditCard />
					<CreditCard variant="outline" />
				</div>
			</Card.Root>

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Recent Transaction</Card.Title>
				</Card.Header>

				<RecentTransaction />
			</Card.Root>

			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>Weekly Activity</Card.Title>
				</Card.Header>

				<WeeklyActivity />
			</Card.Root>

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Expense Statistics</Card.Title>
				</Card.Header>

				<ExpenseStatistics />
			</Card.Root>

			{/* 

			

		

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Quick Transfer</Card.Title>
				</Card.Header>

				<div className="bg-background rounded-lg"></div>
			</Card.Root>

			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>Balance History</Card.Title>
				</Card.Header>

				<div className="aspect-[635/276] bg-background rounded-lg"></div>
			</Card.Root> */}
		</div>
	);
}
