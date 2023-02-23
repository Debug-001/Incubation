import React from "react";
import { Routes, Route, Router } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
		</>
	);
}

export default App;