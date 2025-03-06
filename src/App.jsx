import { useReducer } from 'react'
import Sidebar from './components/Sidebar'
import Starting from './components/Srarting'

const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

// initialState = {
// 	workouts: [
// 	{
// 		id: "",
// 		date: "",
// 		workout: "",
// 		duration: "",
// 		feelings: ""
// 	}
// ]


function workoutsReducer(state, action) {

	if (action.type === "ADD_WORKOUT") {

		const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
		const existingId = storedWorkouts.find((el) => el.id === action.payload.id);

		if (!existingId) {
			localStorage.setItem(
				"workouts",
				JSON.stringify([action.payload, ...storedWorkouts])
			)
		}
		return {
			...state,
			workouts: [action.payload, ...state.workouts]
		}
	}

	if (action.type === "DELETE_WORKOUT") {

		const updatedWorkouts = [...state.workouts].filter((workout) => workout.id !== action.payload);

		const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
		localStorage.setItem(
			"workouts",
			JSON.stringify(storedWorkouts.filter((el) => el.id !== action.payload)
		))

		return {
			...state,
			workouts: updatedWorkouts
		}
	}

	return state;
}


function App() {

	const [workoutsState, workoutsDispatch] = useReducer(
		workoutsReducer,
		{
			workouts: storedWorkouts,
		}
	)

	function addWorkout(inputData) {
		workoutsDispatch({
			type: "ADD_WORKOUT",
			payload: inputData
		})
	}

	function deleteWorkout(id) {
		workoutsDispatch({
			type: "DELETE_WORKOUT",
			payload: id
		})
	}


	console.log(workoutsState.workouts)

	return (
		<main className='h-screen flex'>
			<Sidebar 
				workouts={workoutsState.workouts} 
				onDelete={deleteWorkout}
			/>
			<Starting onAdd={addWorkout} />

		</main>
	)
}

export default App
