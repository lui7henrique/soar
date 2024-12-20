import type { ComponentProps } from "react";
import { svgs } from "./icons";
import { cn } from "@/lib/utils";

type SearchProps = ComponentProps<"div">;

export function Search({ className, ...props }: SearchProps) {
	return (
		<div
			className={cn(
				"rounded-[40px] bg-background-alt h-[50px] px-6 text-[#8BA3CB] gap-4 items-center flex",
				className,
			)}
			{...props}
		>
			{svgs.search}

			<input
				type="text"
				placeholder="Search for something"
				className="bg-transparent outline-none w-[170px]"
			/>
		</div>
	);
}
