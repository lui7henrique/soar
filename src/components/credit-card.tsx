import type { ComponentProps } from "react";
import { svgs } from "./icons";
import { cn } from "@/lib/utils";
import type { MOCK_CREDIT_CARDS } from "@/mocks";

type CreditCardProps = {
	data: (typeof MOCK_CREDIT_CARDS)[number];
	variant?: "default" | "outline";
} & ComponentProps<"div">;

export function CreditCard({
	data,
	variant = "default",
	...props
}: CreditCardProps) {
	const { balance, holder, validThru, number } = data;

	return (
		<div
			className={cn(
				"rounded-[25px] flex flex-col font-lato flex-shrink-0 w-[265px] h-[170px]",
				"desktop:aspect:[350/235] desktop:w-full desktop:h-auto",
				variant === "outline" && "bg-background border",
				variant === "default" &&
					"bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)]",
			)}
			{...props}
		>
			<div
				className={cn(
					"flex-1 relative px-5 py-4",
					"desktop:pt-[24px] desktop:pl-[26px] desktop:pr-[24px] desktop:pb-[24px]",
				)}
			>
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-0">
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white",
								variant === "outline" && "text-secondary",
							)}
						>
							Balance
						</span>
						<p
							className={cn(
								"text-md desktop:text-xl font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							{balance}
						</p>
					</div>
					<figure
						className={cn(
							"[&>svg]:w-[29px] desktop:[&>svg]:w-auto",
							variant === "default" && "text-white",
							variant === "outline" && "text-foreground",
						)}
					>
						{svgs.chip}
					</figure>
				</div>

				<div className={cn("grid grid-cols-2 mt-3", "desktop:mt-7")}>
					<div>
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white/70",
								variant === "outline" && "text-secondary",
							)}
						>
							CARD HOLDER
						</span>
						<p
							className={cn(
								"text-xs desktop:text-md font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							{holder}
						</p>
					</div>

					<div>
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white/70",
								variant === "outline" && "text-secondary",
							)}
						>
							VALID THRU
						</span>
						<p
							className={cn(
								"text-xs desktop:text-md font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							{validThru}
						</p>
					</div>
				</div>
			</div>

			<div
				className={cn(
					"flex justify-between items-center h-[70px] px-[26px] font-semibold text-[22px]",
					variant === "outline" && "border-t",
					variant === "default" && "bg-gradient-to-b from-white/15 to-white/0",
				)}
			>
				<span
					className={cn(
						"text-sm desktop:text-[22px] font-medium",
						variant === "default" && "text-white",
					)}
				>
					{number}
				</span>
				<figure
					className={cn(
						"[&>svg]:w-[27px] desktop:[&>svg]:w-auto text-[#9199AF80]/50",
						variant === "default" && "text-white/50",
					)}
				>
					{svgs.symbol}
				</figure>
			</div>
		</div>
	);
}
