import { Link, useLocation } from "react-router-dom";
import { svgs } from "./icons";
import { cn } from "@/lib/utils";

const NAVIGATION = [
	{
		label: "Dashboard",
		href: "/",
		icon: svgs.dashboard,
	},
	{
		label: "Transactions",
		href: "/transactions",
		icon: svgs.transactions,
	},
	{
		label: "Accounts",
		href: "/accounts",
		icon: svgs.accounts,
	},
	{
		label: "Investments",
		href: "/investments",
		icon: svgs.investments,
	},
	{
		label: "Credit Cards",
		href: "/credit-cards",
		icon: svgs.creditCards,
	},
	{
		label: "Loans",
		href: "/loans",
		icon: svgs.loans,
	},
	{
		label: "Services",
		href: "/services",
		icon: svgs.services,
	},
	{
		label: "My Privileges",
		href: "/my-privileges",
		icon: svgs.privilegies,
	},
	{
		label: "Setting",
		href: "/setting",
		icon: svgs.setting,
	},
] as const;

export function Sidebar() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<aside className="h-screen border-r px-10 py-8 space-y-8 hidden desktop:block">
			<div className="flex gap-2.5 font-extrabold text-[25px]">
				{svgs.task}
				<span className="text-muted-foreground">Soar task</span>
			</div>

			<nav className="space-y-10">
				{NAVIGATION.map(({ label, href, icon }) => {
					const isActive =
						href === "/" ? pathname === "/" : pathname.includes(href);

					return (
						<Link
							to={href}
							className={cn(
								"relative flex items-center gap-[26px] font-medium text-[18px]",
								"text-muted",
								isActive && "text-foreground",
								"before:absolute before:left-[-40px] before:top-1/2 before:-translate-y-1/2 before:bg-foreground before:rounded-r-[10px] before:h-[60px] before:transition-all before:duration-300",
								isActive ? "before:w-[6px]" : "before:w-0",
							)}
							key={label}
						>
							{icon}
							{label}
						</Link>
					);
				})}
			</nav>
		</aside>
	);
}
