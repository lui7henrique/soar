import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div className="grid grid-cols-1 desktop:grid-cols-[250px_1fr] h-screen">
			<Sidebar />

			<section className="flex flex-col">
				<Header />

				<main className="desktop:bg-background-alt desktop:h-[calc(100vh-100px)] overflow-y-auto">
					<Outlet />
				</main>
			</section>
		</div>
	);
}
