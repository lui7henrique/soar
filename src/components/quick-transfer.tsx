import { svgs } from "./icons";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { cn } from "../lib/utils";

import liviaBator from "../assets/livia-bator.png";
import randyPress from "../assets/randy-press.png";
import workman1 from "../assets/workman-1.png";
import workman2 from "../assets/workman-2.png";
import workman3 from "../assets/workman-3.png";

import useEmblaCarousel from "embla-carousel-react";

const people = [
	{
		id: v4(),
		name: "Livia Bator",
		role: "CEO",
		image: liviaBator,
	},
	{
		id: v4(),
		name: "Randy Press",
		role: "Director",
		image: randyPress,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman1,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman2,
	},
	{
		id: v4(),
		name: "Workman",
		role: "Designer",
		image: workman3,
	},
] as const;

export function QuickTransfer() {
	const [selectedPerson, setSelectedPerson] = useState<
		(typeof people)[number] | null
	>(null);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		slidesToScroll: 1,
	});

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="rounded-3xl bg-background px-6 py-8 w-[445px] h-auto space-y-[30px]">
			<div className="flex items-center gap-[33px]">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{people.map((person) => {
							const isActive = selectedPerson?.id === person.id;

							return (
								<div
									className={cn(
										"flex-none w-1/3 flex flex-col items-center justify-center transition-all cursor-pointer",
										isActive && "font-bold",
									)}
									key={person.id}
									onClick={() => setSelectedPerson(person)}
									onKeyDown={() => setSelectedPerson(person)}
								>
									<img
										src={person.image}
										alt={person.name}
										className="w-20 h-20 object-cover rounded-full"
									/>

									<p className="whitespace-nowrap mt-4">{person.name}</p>
									<p className="mt-2 text-[#718EBF]">{person.role}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<button
						onClick={scrollNext}
						className="size-[50px] bg-white rounded-full shadow-md flex items-center justify-center text-[#718EBF]"
						type="button"
					>
						{svgs.arrow}
					</button>
				</div>
			</div>

			<div className="flex  gap-4">
				<div className="flex items-center">
					<span className="text-[#718EBF] whitespace-nowrap">Write Amount</span>
				</div>

				<form className="flex bg-[#EDF1F7] rounded-[50px] relative flex-1">
					<input
						type="text"
						className="bg-transparent text-[#718EBF] px-4 py-3 outline-none"
						placeholder="525.50"
					/>

					<button
						className="absolute right-0 rounded-[50px] bg-foreground text-background px-6 py-3 flex items-center justify-center gap-2"
						type="submit"
					>
						Send
						{svgs.airplane}
					</button>
				</form>
			</div>
		</section>
	);
}
