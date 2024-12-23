import { EditProfile } from "@/components/forms/edit-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Setting() {
	return (
		<section className="my-[25px] p-5 bg-background desktop:max-w-[1180px] desktop:mx-auto rounded-3xl desktop:p-[30px] desktop:my-none">
			<Tabs defaultValue="edit-profile">
				<TabsList className="grid grid-cols-3 desktop:flex">
					<TabsTrigger value="edit-profile">Edit profile</TabsTrigger>
					<TabsTrigger value="preferences">Preferences</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>

				<TabsContent value="edit-profile">
					<EditProfile />
				</TabsContent>

				<TabsContent value="preferences">
					<div className="h-[65dvh]">Preferences (not implemented yet)</div>
				</TabsContent>

				<TabsContent value="security">
					<div className="h-[65dvh]">Security (not implemented yet)</div>
				</TabsContent>
			</Tabs>
		</section>
	);
}
