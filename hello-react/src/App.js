import "./App.css";
import Header from "./components/Header";
import React from "react";
import User from "./components/user";

const name = "Birsen";
const surname = "Bozkurt";
const isLoggedIn = true;
const friends = [
	{
		id: 1,
		name: "Ahmet",
	},
	{
		id: 2,
		name: "Tayfun",
	},
	{
		id: 3,
		name: "Gökhan",
	},
];

function App() {
	// return React.createElement("div", null, "Hello");
	return (
		<>
			<User
				// name="Birsen"
				surname="Bozkurt"
				isLoggedIn={true}
				age={24}
				friends={friends}
				address={{
					title: "Keçiören/Ankara",
					zip: 36201,
				}}
			/>
		</>
	);
}
export default App;
