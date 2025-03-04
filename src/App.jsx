import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Starting from './components/Srarting'

const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

function App() {

	const [workouts, setWorkouts] = useState(storedWorkouts)
		
		// [{
		// 	id: "",
		// 	date: "",
		// 	workout: "",
		// 	duration: "",
		// 	feelings: ""
		// }]
	
	function addNewWorkout(inputData) {
		setWorkouts((prevState) => (
			[
				...prevState,
				inputData
			]
		))

		const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
		localStorage.setItem(
			"workouts",
			JSON.stringify([inputData, ...storedWorkouts])
		)
	}

	console.log(workouts)

	return (
		<main className='h-screen flex'>
			<Sidebar workouts={workouts} />
			<Starting  onAdd={addNewWorkout} />

		</main>
	)
}

export default App
