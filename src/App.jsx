import React from "react";
import { Routes, Route, Router } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Startup from './pages/Startup'
import Events from'./pages/Events'
import Tech from "./pages/Tech";
import Expert from "./pages/Expert";
import Core from "./pages/Core";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/team" element={<Team/>} />
				<Route path="/startups" element={<Startup/>} />
				<Route path="/events" element={<Events/>} />
				<Route path="/tech" element={<Tech/>} />
				<Route path="/expert" element={<Expert/>} />
				<Route path="/core" element={<Core/>} />
			</Routes>
		</>
	);
}

export default App;