import { z } from "zod";

export const editProfileSchema = z.object({
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
	image: z
		.any()
		.optional()
		.refine((file) => {
			if (!file) return true; // Se não for obrigatório
			const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
			const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
			return (
				file instanceof File &&
				acceptedFormats.includes(file.type) &&
				file.size <= maxSizeInBytes
			);
		}, "Unsupported file format or file is too large (max 5MB)."),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
