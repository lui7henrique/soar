import { svgs } from "./icons";

export function Search() {
	return (
		<div className="rounded-[40px] bg-background-alt h-[50px] px-6 text-[#8BA3CB] gap-4 flex items-center">
			{svgs.search}

			<input
				type="text"
				placeholder="Search for something"
				className="bg-transparent outline-none w-[170px]"
			/>
		</div>
	);
}
