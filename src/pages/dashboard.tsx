import { lazy, Suspense, type ComponentProps } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { CreditCard } from "@/components/credit-card";
import { RecentTransaction } from "@/components/recent-transaction";
import { MOCK_CREDIT_CARDS } from "@/mocks";

const WeeklyActivity = lazy(() => import("@/components/weekly-activity"));
const ExpenseStatistics = lazy(() => import("@/components/expense-statistics"));
const QuickTransfer = lazy(() => import("@/components/quick-transfer"));
const BalanceHistory = lazy(() => import("@/components/balance-history"));

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
				"font-semibold text-[16px] text-muted-foreground desktop:text-[22px]",
			)}
			{...props}
		/>
	),
	Action: ({ className, ...props }: ComponentProps<"div">) => (
		<span
			className={cn(
				className,
				"font-semibold text-[16px] text-muted-foreground desktop:text-[22px]",
			)}
			{...props}
		/>
	),
};

export function Dashboard() {
	return (
		<div
			className={cn(
				"bg-background -m-6 p-6 gap-8 flex flex-col",
				"desktop:grid desktop:grid-cols-3 desktop:max-w-[1180px] desktop:mx-auto desktop:bg-transparent desktop:px-0",
			)}
		>
			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>My Cards</Card.Title>
					<Card.Action className="hover:underline">
						<Link to="/credit-cards">See all</Link>
					</Card.Action>
				</Card.Header>
				<div className="flex gap-5 overflow-x-auto scrollbar-hide px-6 -mx-6 desktop:mx-none desktop:px-none desktop:grid desktop:grid-cols-2">
					{MOCK_CREDIT_CARDS.map((creditCard) => (
						<CreditCard
							variant={creditCard.main ? "default" : "outline"}
							key={creditCard.id}
							data={creditCard}
						/>
					))}
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
				<Suspense fallback={<p>Loading Weekly Activity...</p>}>
					<WeeklyActivity />
				</Suspense>
			</Card.Root>

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Expense Statistics</Card.Title>
				</Card.Header>
				<Suspense fallback={<p>Loading Expense Statistics...</p>}>
					<ExpenseStatistics />
				</Suspense>
			</Card.Root>

			<div
				className={cn(
					"flex flex-col gap-8",
					"desktop:col-span-3 desktop:grid desktop:grid-cols-[445px_1fr] desktop:gap-[30px]",
				)}
			>
				<Card.Root>
					<Card.Header>
						<Card.Title>Quick Transfer</Card.Title>
					</Card.Header>
					<Suspense fallback={<p>Loading Quick Transfer...</p>}>
						<QuickTransfer />
					</Suspense>
				</Card.Root>

				<Card.Root className="col-span-1">
					<Card.Header>
						<Card.Title>Balance History</Card.Title>
					</Card.Header>
					<Suspense fallback={<p>Loading Balance History...</p>}>
						<BalanceHistory />
					</Suspense>
				</Card.Root>
			</div>
		</div>
	);
}
