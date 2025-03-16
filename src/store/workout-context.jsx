import { createContext, useReducer } from "react";

const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];

export const WorkoutContext = createContext({
    workouts: [],
    addWorkout: () => {},
    deleteWorkout: () => {},
	updateWorkout: () => {},
});

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
			workouts: [action.payload, ...state.workouts],
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

	if (action.type === "UPDATE_WORKOUT") {
		const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
		storedWorkouts[0].rating = action.payload;
		localStorage.setItem(
			"workouts",
			JSON.stringify(storedWorkouts)
		)

		return {
			...state,
			workouts: storedWorkouts,
		}
	}

	return state;
}

export default function WorkoutContextProvider({children}) {

    const [workoutsState, workoutsDispatch] = useReducer(
		workoutsReducer,
		{
			workouts: storedWorkouts,
		}
	)

	function handleAddWorkout(inputData) {
		workoutsDispatch({
			type: "ADD_WORKOUT",
			payload: inputData
		})
	}

	function handleDeleteWorkout(id) {
		workoutsDispatch({
			type: "DELETE_WORKOUT",
			payload: id
		})
	}

	function handleUpdateWorkout(rating) {
		workoutsDispatch({
			type: "UPDATE_WORKOUT",
			payload: rating
		})
	}

    const contextValue = {
        workouts: workoutsState.workouts,
        addWorkout: handleAddWorkout,
        deleteWorkout: handleDeleteWorkout,
		updateWorkout: handleUpdateWorkout
    }

    return (
        <WorkoutContext.Provider value={contextValue}>
            {children}
        </WorkoutContext.Provider>
    )
}