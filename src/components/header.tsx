"use client";

import { svgs } from "./icons";
import { useLocation } from "react-router-dom";
import { Search } from "./search";
import user from "../assets/user.jpg";

const title = {
	"/": "Overview",
	"/setting": "Setting",
};

export function Header() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<header className="border-b h-[100px] justify-between px-10 flex items-center ">
			<h1 className="text-[28px] font-semibold">
				{title[pathname as keyof typeof title]}
			</h1>

			<div className="flex gap-[30px] items-center">
				<Search />

				<button
					className="w-[50px] h-[50px] items-center justify-center flex bg-background-alt rounded-full text-[#718EBF]"
					type="button"
				>
					{svgs.gear}
				</button>

				<button
					className="w-[50px] h-[50px] items-center justify-center flex bg-background-alt rounded-full text-primary"
					type="button"
				>
					{svgs.notification}
				</button>

				<figure className="relative size-[60px]">
					<img src={user} className="rounded-full" alt="user" />
				</figure>
			</div>
		</header>
	);
}
