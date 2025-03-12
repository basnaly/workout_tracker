import { useRef, useContext, useState } from "react";
import { WorkoutContext } from "../store/workout-context";
import CurrentWorkout from "./CurrentWorkout";

export default function Starting() {

    const { addWorkout } = useContext(WorkoutContext);
    const [workoutStarted, setWorkoutStarted] = useState(undefined);

    const todayDate = new Date().toLocaleString('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long', 
    });

    const inputClasses = "mx-auto m-2 p-1 border-1 rounded-sm border-stone-400 bg-blue-100 focus:outline-none focus:border-stone-700";

    const workout = useRef();
    const duration = useRef();

    function handleSave() {
        const enteredWorkout = workout.current.value;
        const enteredDuration = duration.current.value;

        if (enteredWorkout.trim() === "" || enteredDuration.trim() === "") {
            return
        }

        const currentDate = new Date().toLocaleString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'long', 
            hour: 'numeric',
            minute: 'numeric'
        });

        const id = Math.random();

        addWorkout({
            id: id,
			date: currentDate,
			workout: enteredWorkout,
			duration: enteredDuration,
			feelings: ""
        })

        setWorkoutStarted(id)
    }

    if (workoutStarted !== undefined) {
        return (
            <CurrentWorkout workoutId={workoutStarted} />
        )
    }

    return (
        <div className="bg-[url('./assets/tracker.png')] w-2/3 bg-cover flex flex-col">
            <p className="mt-12 mx-10 text-[1.2rem] text-end">
                {todayDate}
            </p>
            <h3 className="text-2xl font-bold mt-24 mx-auto">
                Create your workout
            </h3>
            <div className="flex flex-col my-10">
                <input 
                    ref={workout}
                    className={inputClasses} 
                    placeholder="Type of the workout"
                />
                <input 
                    ref={duration}
                    className={inputClasses} 
                    placeholder="Duration"
                />
                <button 
                    onClick={handleSave}
                    className="mx-auto mt-10 px-4 py-2 text-xl md:text-base rounded-md bg-blue-400 hover:bg-blue-700 hover:text-stone-100"
                >
                    Save and Start
                </button>
            </div>
            
        </div>
    )
}