import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";

export default function RootLayout() {
	return (
		<div className="grid grid-cols-1 desktop:grid-cols-[250px_1fr] h-screen">
			<Sidebar />

			<section className="flex flex-col">
				<Header />
				<main className="bg-background-alt h-[calc(100vh-100px)] overflow-y-auto">
					<Outlet />
				</main>
			</section>
		</div>
	);
}
