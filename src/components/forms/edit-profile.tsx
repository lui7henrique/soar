import user from "@/assets/user.jpg";
import { svgs } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function EditProfile() {
	return (
		<form className="space-y-10 flex flex-col">
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
						<Input placeholder="Charlene Reed" id="name" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="username">Username</Label>
						<Input placeholder="Charlene Reed" id="username" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="email">Email</Label>
						<Input
							placeholder="charlenereed@gmail.com"
							id="email"
							type="email"
						/>
					</div>

					<div className="space-y-3">
						<Label htmlFor="password">Password</Label>
						<Input placeholder="**********" id="password" type="password" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="password">Date of Birth</Label>
						<Input placeholder="**********" id="password" type="date" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="address">Present Address</Label>
						<Input
							placeholder="San Jose, California, USA"
							id="presentAddress"
						/>
					</div>

					<div className="space-y-3">
						<Label htmlFor="address">Permanent Address</Label>
						<Input
							placeholder="San Jose, California, USA"
							id="permanentAddress"
						/>
					</div>

					<div className="space-y-3">
						<Label htmlFor="address">City</Label>
						<Input placeholder="San Jose" id="permanentAddress" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="address">Postal Code</Label>
						<Input placeholder="45962" id="permanentAddress" />
					</div>

					<div className="space-y-3">
						<Label htmlFor="address">Country</Label>
						<Input placeholder="USA" id="permanentAddress" />
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<Button>Save</Button>
			</div>
		</form>
	);
}
