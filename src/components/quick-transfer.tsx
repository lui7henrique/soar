import { svgs } from "./icons";
import { useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { cn, sleep } from "@/lib/utils";
import { LAST_TRANSFERS } from "@/mocks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const quickTransferSchema = z.object({
	selectedPersonId: z
		.string()
		.nonempty("Please select a person to transfer to."),
	amount: z
		.number({
			required_error: "Amount is required.",
			invalid_type_error: "Amount must be a number.",
		})
		.positive("Amount must be greater than zero.")
		.max(10_000, "Amount cannot exceed 10,000."),
});

type QuickTransferFormData = z.infer<typeof quickTransferSchema>;

export default function QuickTransfer() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isSubmitting },
	} = useForm<QuickTransferFormData>({
		resolver: zodResolver(quickTransferSchema),
		defaultValues: {
			selectedPersonId: "",
			amount: 0,
		},
	});

	const selectedPersonId = watch("selectedPersonId");
	const selectedPerson =
		LAST_TRANSFERS.find((person) => person.id === selectedPersonId) || null;

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		slidesToScroll: 1,
	});

	const onSubmit = async (data: QuickTransferFormData) => {
		await sleep(1_000);

		try {
			alert(
				`Transferred $${data.amount} to ${selectedPerson?.name} successfully!`,
			);
		} catch (error) {
			alert("Failed to complete the transfer. Please try again.");
		}
	};

	const handlePersonSelect = useCallback(
		(personId: string) => {
			setValue("selectedPersonId", personId, {
				shouldValidate: true,
				shouldDirty: true,
			});
		},
		[setValue],
	);

	return (
		<section className="rounded-3xl bg-background h-auto space-y-[30px] desktop:w-[445px] desktop:px-6 desktop:py-8 w-full">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex items-center gap-[21px] desktop:gap-[33px]">
					{/* Carousel for Selecting a Person */}
					<div className="overflow-hidden flex-1" ref={emblaRef}>
						<div className="flex">
							{LAST_TRANSFERS.map((person) => {
								const isActive = selectedPersonId === person.id;

								return (
									<button
										className={cn(
											"flex-none w-1/3 flex flex-col items-center justify-center transition-all cursor-pointer",
											isActive && "font-bold",
										)}
										key={person.id}
										onClick={() => handlePersonSelect(person.id)}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ") {
												handlePersonSelect(person.id);
											}
										}}
										type="button"
										tabIndex={0}
										aria-pressed={isActive}
									>
										<img
											src={person.image}
											alt={person.name}
											className="object-cover rounded-full size-[50px] desktop:size-20"
										/>

										<p className="whitespace-nowrap mt-4 text-xs desktop:text-sm">
											{person.name}
										</p>

										<p className="mt-2 text-secondary">{person.role}</p>
									</button>
								);
							})}
						</div>
					</div>

					<div>
						<button
							onClick={() => emblaApi?.scrollNext()}
							className="bg-white rounded-full shadow-md flex items-center justify-center text-secondary size-[40px] desktop:size-[50px]"
							type="button"
							aria-label="Scroll to next person"
						>
							{svgs.arrow}
						</button>
					</div>
				</div>

				<div className="flex gap-4 mt-6">
					<div className="flex items-center">
						<span className="text-secondary whitespace-nowrap text-xs desktop:text-[16px]">
							Write Amount
						</span>
					</div>

					<div
						className={cn(
							"flex bg-[#EDF1F7] rounded-[50px] relative flex-1",
							errors.amount && "border border-red-500",
						)}
					>
						<input
							type="number"
							step="0.01"
							className={cn(
								"bg-transparent text-secondary px-4 py-3 outline-none text-sm desktop:text-[16px] w-full",
							)}
							placeholder="525.50"
							aria-invalid={errors.amount ? "true" : "false"}
							{...register("amount", { valueAsNumber: true })}
						/>

						<button
							className={cn(
								"absolute right-0 rounded-[50px] bg-foreground text-background flex items-center justify-center gap-2 px-5 py-3 [&>svg]:w-[16px] text-xs",
								"desktop:px-6 desktop:py-3 desktop:text-[16px] desktop:[&>svg]:w-auto",
								"disabled:opacity-50 disabled:cursor-not-allowed bg-foreground hover:opacity-90 transition-all",
							)}
							type="submit"
							disabled={!selectedPersonId || isSubmitting}
							aria-disabled={!selectedPersonId || isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send"}
							{svgs.airplane}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
}
