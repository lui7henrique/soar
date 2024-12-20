import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { svgs } from "./icons";

type CreditCardProps = {
	variant?: "default" | "outline";
} & ComponentProps<"div">;

export function CreditCard({ variant = "default", ...props }: CreditCardProps) {
	return (
		<div
			className={cn(
				"rounded-[25px] flex flex-col font-lato w-[350px] h-[235px]",
				variant === "outline" && "bg-background border",
				variant === "default" &&
					"bg-[linear-gradient(107.38deg,_#5B5A6F_2.61%,_#000000_101.2%)]",
			)}
			{...props}
		>
			<div className="pt-[24px] pl-[26px] pr-[24px] pb-[24px] flex-1 relative">
				<div className="flex justify-between items-center">
					<div>
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white",
								variant === "outline" && "text-[#718EBF]",
							)}
						>
							Balance
						</span>
						<p
							className={cn(
								"text-xl font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							$5,756
						</p>
					</div>
					<figure
						className={cn(
							variant === "default" && "text-white",
							variant === "outline" && "text-foreground",
						)}
					>
						{svgs.chip}
					</figure>
				</div>

				<div className="grid grid-cols-2 mt-7">
					<div>
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white/70",
								variant === "outline" && "text-[#718EBF]",
							)}
						>
							CARD HOLDER
						</span>
						<p
							className={cn(
								"font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							Eddy Cusuma
						</p>
					</div>

					<div>
						<span
							className={cn(
								"text-xs",
								variant === "default" && "text-white/70",
								variant === "outline" && "text-[#718EBF]",
							)}
						>
							VALID THRU
						</span>
						<p
							className={cn(
								"font-semibold",
								variant === "default" && "text-white",
								variant === "outline" && "text-muted-foreground",
							)}
						>
							12/22
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
						"text-[22px] font-medium",
						variant === "default" && "text-white",
					)}
				>
					3778 **** **** 1234
				</span>
				<figure
					className={cn(
						"text-[#9199AF80]/50",
						variant === "default" && "text-white/50",
					)}
				>
					{svgs.symbol}
				</figure>
			</div>
		</div>
	);
}
