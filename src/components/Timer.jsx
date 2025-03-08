import { useRef, useContext, useState } from "react";
import { WorkoutContext } from "../store/workout-context";

export default function Timer({workoutId}) {

    const { workouts } = useContext(WorkoutContext);
    const currentWorkout = workouts.find((el) => el.id === workoutId)

    return (
        <div>
            <h2>Your current workout is: {currentWorkout?.workout.toUpperCase()}</h2>
            <div className="flex">
                <button>Start</button>
                <time>{currentWorkout?.duration.toUpperCase()}</time>
                <button>Stop</button>
            </div>
        </div>
    )
}