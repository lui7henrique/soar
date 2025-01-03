"use client";

import { svgs } from "./icons";
import { Link, useLocation } from "react-router-dom";
import { Search } from "./search";
import user from "@/assets/user.jpg";
import { useMediaQuery } from "@/hooks/use-media-query";

const title = {
	"/": "Overview",
	"/setting": "Setting",
};

export function Header() {
	const location = useLocation();
	const pathname = location.pathname;

	const isDesktop = useMediaQuery("(min-width: 1280px)");

	if (isDesktop) {
		return (
			<header className="justify-between px-10 flex items-center border-b h-[100px]">
				<h1 className="text-[28px] font-semibold">
					{title[pathname as keyof typeof title]}
				</h1>

				<div className="flex gap-[30px] items-center">
					<Search />

					<button
						className="w-[50px] h-[50px] items-center justify-center bg-background-alt rounded-full text-secondary flex"
						type="button"
					>
						{svgs.gear}
					</button>

					<button
						className="w-[50px] h-[50px] items-center justify-center  bg-background-alt rounded-full text-primary flex"
						type="button"
					>
						{svgs.notification}
					</button>

					<Link to="/setting" className="relative size-[60px]">
						<img src={user} className="rounded-full" alt="user" />
					</Link>
				</div>
			</header>
		);
	}

	return (
		<header className="my-5 mx-[25px] space-y-5">
			<div className="flex justify-between items-center">
				<Link to="/" type="button">
					{svgs.menu}
				</Link>

				<h1 className="text-[20px] font-semibold text-[#343C6A]">
					{title[pathname as keyof typeof title]}
				</h1>

				<Link to="/setting" className="relative size-[60px]">
					<img src={user} className="rounded-full" alt="user" />
				</Link>
			</div>

			<Search className="flex desktop:hidden" />
		</header>
	);
}
