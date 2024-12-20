import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

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
		<div className="grid grid-cols-3 px-10 py-6 gap-8 max-w-[1920px] mx-auto">
			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>My Cards</Card.Title>
					<Card.Action>See all</Card.Action>
				</Card.Header>

				<div className="grid grid-cols-2 gap-8">
					<div className="aspect-[350/235] bg-background rounded-lg"></div>
					<div className="aspect-[350/235] bg-background rounded-lg"></div>
				</div>
			</Card.Root>

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Recent Transaction</Card.Title>
				</Card.Header>

				<div className="aspect-[350/235] bg-background rounded-lg"></div>
			</Card.Root>

			<Card.Root className="col-span-2">
				<Card.Header>
					<Card.Title>Weekly Activity</Card.Title>
				</Card.Header>

				<div className="aspect-[730/322] bg-background rounded-lg"></div>
			</Card.Root>

			<Card.Root className="col-span-1">
				<Card.Header>
					<Card.Title>Expense Statistics</Card.Title>
				</Card.Header>

				<div className="aspect-[350/322] bg-background rounded-lg"></div>
			</Card.Root>

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
			</Card.Root>
		</div>
	);
}
