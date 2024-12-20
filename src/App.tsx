import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/root";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					{/* <Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="tasks" element={<TasksPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
