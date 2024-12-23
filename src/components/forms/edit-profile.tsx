import user from "@/assets/user.jpg";
import { svgs } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const editProfileSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	username: z
		.string()
		.min(3, "Username must be at least 3 characters")
		.regex(
			/^[a-zA-Z0-9_]+$/,
			"Username can only contain letters, numbers, and underscores",
		),
	email: z.string().email("Invalid email address"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(32, "Password must not exceed 32 characters"),
	dateOfBirth: z.string().refine((date) => {
		const dob = new Date(date);
		const today = new Date();
		return dob < today;
	}, "Date of Birth must be in the past"),
	presentAddress: z.string().min(5, "Address must be at least 5 characters"),
	permanentAddress: z.string().min(5, "Address must be at least 5 characters"),
	city: z.string().min(2, "City must be at least 2 characters"),
	postalCode: z
		.string()
		.regex(/^\d{5}$/, "Postal Code must be exactly 5 digits"),
	country: z.string().min(2, "Country must be at least 2 characters"),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

export function EditProfile() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitted },
	} = useForm<EditProfileFormData>({
		resolver: zodResolver(editProfileSchema),
	});

	const onSubmit = async (data: EditProfileFormData) => {
		await new Promise((resolve) => setTimeout(resolve, 1_000));
		console.log({ data });
	};

	return (
		<form
			className="space-y-10 flex flex-col"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex gap-[57px] pl-[30px] pt-10">
				<div className="relative size-[90px]">
					<img src={user} className="size-full rounded-full" alt="user" />

					<button
						className="size-[30px] flex items-center justify-center bg-foreground absolute bottom-0 -right-2 rounded-full text-white"
						type="button"
					>
						{svgs.edit}
					</button>
				</div>

				<div className="grid grid-cols-2 gap-x-[29px] gap-y-[22px] flex-1">
					<div className="space-y-3">
						<Label htmlFor="name">Your name</Label>
						<Input
							placeholder="Charlene Reed"
							id="name"
							{...register("name")}
							className={errors.name ? "border-red-500" : ""}
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="username">Username</Label>
						<Input
							placeholder="charlene_reed"
							id="username"
							{...register("username")}
							className={errors.username ? "border-red-500" : ""}
						/>
						{errors.username && (
							<p className="text-red-500 text-sm mt-1">
								{errors.username.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="email">Email</Label>
						<Input
							placeholder="charlenereed@gmail.com"
							id="email"
							type="email"
							{...register("email")}
							className={errors.email ? "border-red-500" : ""}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="password">Password</Label>
						<Input
							placeholder="**********"
							id="password"
							type="password"
							{...register("password")}
							className={errors.password ? "border-red-500" : ""}
						/>
						{errors.password && (
							<p className="text-red-500 text-sm mt-1">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="dateOfBirth">Date of Birth</Label>
						<Input
							id="dateOfBirth"
							type="date"
							{...register("dateOfBirth")}
							className={errors.dateOfBirth ? "border-red-500" : ""}
						/>
						{errors.dateOfBirth && (
							<p className="text-red-500 text-sm mt-1">
								{errors.dateOfBirth.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="presentAddress">Present Address</Label>
						<Input
							placeholder="San Jose, California, USA"
							id="presentAddress"
							{...register("presentAddress")}
							className={errors.presentAddress ? "border-red-500" : ""}
						/>
						{errors.presentAddress && (
							<p className="text-red-500 text-sm mt-1">
								{errors.presentAddress.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="permanentAddress">Permanent Address</Label>
						<Input
							placeholder="San Jose, California, USA"
							id="permanentAddress"
							{...register("permanentAddress")}
							className={errors.permanentAddress ? "border-red-500" : ""}
						/>
						{errors.permanentAddress && (
							<p className="text-red-500 text-sm mt-1">
								{errors.permanentAddress.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="city">City</Label>
						<Input
							placeholder="San Jose"
							id="city"
							{...register("city")}
							className={errors.city ? "border-red-500" : ""}
						/>
						{errors.city && (
							<p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="postalCode">Postal Code</Label>
						<Input
							placeholder="45962"
							id="postalCode"
							{...register("postalCode")}
							className={errors.postalCode ? "border-red-500" : ""}
						/>
						{errors.postalCode && (
							<p className="text-red-500 text-sm mt-1">
								{errors.postalCode.message}
							</p>
						)}
					</div>

					<div className="space-y-3">
						<Label htmlFor="country">Country</Label>
						<Input
							placeholder="USA"
							id="country"
							{...register("country")}
							className={errors.country ? "border-red-500" : ""}
						/>
						{errors.country && (
							<p className="text-red-500 text-sm mt-1">
								{errors.country.message}
							</p>
						)}
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<Button disabled={isSubmitting}>
					{isSubmitting ? "Saving" : "Saved"}
				</Button>
			</div>
		</form>
	);
}
