import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/root";
import { Dashboard } from "./pages/dashboard";
import { Setting } from "./pages/setting";
import { NotImplemented } from "./pages/not-implemented";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="setting" element={<Setting />} />
					<Route path="*" element={<NotImplemented />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
