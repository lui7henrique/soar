import { svgs } from "./icons";
import { useCallback, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { LAST_TRANSFERS } from "@/mocks";

export function QuickTransfer() {
	const [selectedPerson, setSelectedPerson] = useState<
		(typeof LAST_TRANSFERS)[number] | null
	>(null);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		slidesToScroll: 1,
	});

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="rounded-3xl bg-background h-auto space-y-[30px] desktop:w-[445px] desktop:px-6 desktop:py-8 w-full">
			<div className="flex items-center gap-[21px] desktop:gap-[33px]">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{LAST_TRANSFERS.map((person) => {
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
										className="object-cover rounded-full size-[50px] desktop:size-20"
									/>

									<p className="whitespace-nowrap mt-4 text-xs desktop:text-sm">
										{person.name}
									</p>

									<p className="mt-2 text-[#718EBF]">{person.role}</p>
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<button
						onClick={scrollNext}
						className=" bg-white rounded-full shadow-md flex items-center justify-center text-[#718EBF] size-[40px] desktop:size-[50px]"
						type="button"
					>
						{svgs.arrow}
					</button>
				</div>
			</div>

			<div className="flex gap-4">
				<div className="flex items-center">
					<span className="text-[#718EBF] whitespace-nowrap text-xs desktop:text-[16px]">
						Write Amount
					</span>
				</div>

				<form className="flex bg-[#EDF1F7] rounded-[50px] relative">
					<input
						type="text"
						className="bg-transparent text-[#718EBF] px-4 py-3 outline-none text-sm desktop:text-[16px] w-full"
						placeholder="525.50"
					/>

					<button
						className={cn(
							"absolute right-0 rounded-[50px] bg-foreground text-background  flex items-center justify-center gap-2 px-5 py-3 [&>svg]:w-[16px] text-xs",
							"desktop:px-6 desktop:py-3 desktop:text-[16px] desktop:[&>svg]:w-auto",
						)}
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
