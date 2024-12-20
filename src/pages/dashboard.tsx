import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { CreditCard } from "../components/credit-card";
import { RecentTransaction } from "../components/recent-transaction";
import { WeeklyActivity } from "../components/weekly-activity";
import { ExpenseStatistics } from "../components/expense-statistics";
import { QuickTransfer } from "../components/quick-transfer";
import { BalanceHistory } from "../components/balance-history";

const Card = {
	Root: ({ className, ...props }: ComponentProps<"div">) => (
		<div className={cn(className, "space-y-5")} {...props} />
	),
	Header: ({ className, ...props }: ComponentProps<"div">) => (
		<div
			className={cn(className, "flex justify-between items-center")}
			{...props}
		/>
	),
	Title: ({ className, ...props }: ComponentProps<"div">) => (
		<h4
			className={cn(
				className,
				"font-semibold text-md text-muted-foreground desktop:text-[22px]",
			)}
			{...props}
		/>
	),
	Action: ({ className, ...props }: ComponentProps<"div">) => (
		<span
			className={cn(
				className,
				"font-semibold text-md text-muted-foreground desktop:text-[22px]",
			)}
			{...props}
		/>
	),
};

export function Dashboard() {
	return (
		<div
			className={cn(
				"gap-8 px-6 flex flex-col",
				"desktop:grid desktop:grid-cols-3 desktop:px-10 desktop:py-6 desktop:max-w-[1180px] desktop:mx-auto",
			)}
		>
			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>My Cards</Card.Title>

					<Card.Action>
						<Link to="/credit-cards">See all</Link>
					</Card.Action>
				</Card.Header>

				<div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-6 px-6">
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

			<div
				className={cn(
					"flex flex-col",
					"desktop:col-span-3 desktop:grid desktop:grid-cols-[445px_1fr] desktop:gap-[30px]",
				)}
			>
				<Card.Root>
					<Card.Header>
						<Card.Title>Quick Transfer</Card.Title>
					</Card.Header>

					<QuickTransfer />
				</Card.Root>

				<Card.Root className="col-span-1">
					<Card.Header>
						<Card.Title>Balance History</Card.Title>
					</Card.Header>

					<BalanceHistory />
				</Card.Root>
			</div>
		</div>
	);
}
