import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex h-[40px] text-[12px] px-4 py-3 w-full rounded-[15px] border bg-transparent transition-colors text-secondary placeholder:text-secondary focus-visible:outline-none focus-visible:ring-1  disabled:cursor-not-allowed disabled:opacity-50",
					"desktop:h-[50px] desktop:px-5 desktop:py-4 desktop:text-[16px]",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
