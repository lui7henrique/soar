import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import user from "@/assets/user.jpg";
import { svgs } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
	type EditProfileFormData,
	editProfileSchema,
} from "./edit-profile-schema";
import { cn } from "@/lib/utils";

const fields = [
	{ id: "name", label: "Your Name", placeholder: "Charlene Reed" },
	{
		id: "username",
		label: "Username",
		placeholder: "charlene_reed",
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		placeholder: "charlenereed@gmail.com",
	},
	{
		id: "password",
		label: "Password",
		type: "password",
		placeholder: "**********",
	},
	{ id: "dateOfBirth", label: "Date of Birth", type: "date" },
	{
		id: "presentAddress",
		label: "Present Address",
		placeholder: "San Jose, California, USA",
	},
	{
		id: "permanentAddress",
		label: "Permanent Address",
		placeholder: "San Jose, California, USA",
	},
	{ id: "city", label: "City", placeholder: "San Jose" },
	{ id: "postalCode", label: "Postal Code", placeholder: "45962" },
	{ id: "country", label: "Country", placeholder: "USA" },
];

export function EditProfile() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<EditProfileFormData>({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
			dateOfBirth: "",
			presentAddress: "",
			permanentAddress: "",
			city: "",
			postalCode: "",
			country: "",
			image: null,
		},
	});

	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const onSubmit = async (data: EditProfileFormData) => {
		const formData = new FormData();

		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value instanceof FileList ? value[0] : value);
		}

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log("Form Data:", data);
			alert("Profile updated successfully!");
		} catch (error) {
			console.error("Failed to update profile:", error);
			alert("Failed to update profile. Please try again.");
		}
	};

	const handleEditClick = () => {
		fileInputRef.current?.click();
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue("image", e.target.files);
			const reader = new FileReader();
			reader.onloadend = () => setPreviewImage(reader.result as string);
			reader.readAsDataURL(file);
		}
	};

	return (
		<form
			className="space-y-4 desktop:space-y-10 flex flex-col"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div
				className={cn(
					"flex flex-col items-center gap-[22px] pt-[45px]",
					"desktop:flex-row desktop:gap-[57px] desktop:pl-[30px] desktop:pt-10 desktop:items-start",
				)}
			>
				<div className="relative size-[90px]">
					<img
						src={previewImage || user}
						className="size-full rounded-full object-cover"
						alt="user"
					/>
					<button
						className="size-[30px] flex items-center justify-center bg-foreground absolute bottom-0 -right-2 rounded-full text-white"
						type="button"
						onClick={handleEditClick}
						aria-label="Edit profile picture"
					>
						{svgs.edit}
					</button>

					<input
						type="file"
						accept="image/*"
						className="hidden"
						{...register("image")}
						ref={fileInputRef}
						onChange={handleImageChange}
					/>
				</div>

				<div
					className={cn(
						"grid gap-y-[16px] w-full",
						"desktop:grid-cols-2 desktop:gap-x-[29px] desktop:gap-y-[22px] desktop:flex-1 desktop:w-auto",
					)}
				>
					{fields.map(({ id, label, type = "text", placeholder }) => {
						const error = errors[id as keyof EditProfileFormData];

						return (
							<div key={id} className="space-y-[9px] desktop:space-y-3">
								<Label htmlFor={id} className="text-[13px] desktop:text-[16px]">
									{label}
								</Label>

								<Input
									id={id}
									type={type}
									placeholder={placeholder}
									{...register(id as keyof EditProfileFormData)}
									className={
										errors[id as keyof EditProfileFormData]
											? "border-red-500"
											: ""
									}
								/>

								{error && (
									<p className="text-red-500 text-sm mt-1">
										{String(error.message)}
									</p>
								)}
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex justify-end">
				<Button disabled={isSubmitting} className="w-full desktop:w-auto">
					{isSubmitting ? "Saving..." : "Save"}
				</Button>
			</div>
		</form>
	);
}
