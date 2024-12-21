import { EditProfile } from "@/components/forms/edit-profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Setting() {
	return (
		<section className="bg-background desktop:max-w-[1180px] desktop:mx-auto rounded-3xl p-[30px]">
			<Tabs defaultValue="edit-profile">
				<TabsList>
					<TabsTrigger value="edit-profile">Edit profile</TabsTrigger>
					<TabsTrigger value="preferences">Preferences</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
				</TabsList>

				<TabsContent value="edit-profile">
					<EditProfile />
				</TabsContent>

				<TabsContent value="preferences">
					<p>Preferences (not implemented yet)</p>
				</TabsContent>

				<TabsContent value="security">
					<p>Security (not implemented yet)</p>
				</TabsContent>
			</Tabs>
		</section>
	);
}
