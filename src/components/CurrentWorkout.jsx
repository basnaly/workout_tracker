import { useRef, useContext, useState } from "react";
import { WorkoutContext } from "../store/workout-context";
import Timer from "./Timer";
import RateWorkout from "./RateWorkout";

export default function CurrentWorkout({workoutId}) {

    const { workouts } = useContext(WorkoutContext);
    const currentWorkout = workouts.find((el) => el.id === workoutId);

    const [isTimerStart, setIsTimerStart] = useState(true);
    const [isTimerFinish, setIsTimerFinish] = useState(false);

    function handleStartTimer() {
        if (!isTimerFinish) {
            setIsTimerStart(true);
        }
    }

    function handleStopTimer() {
        if (!isTimerFinish) {
            setIsTimerStart(false)
        }
    }

    return (
        <div className="flex flex-col items-center mx-auto">
            <h2 className="m-16 text-xl">
                Your current workout is: 
                <span className="ms-2 py-1 text-2xl font-bold">
                    {currentWorkout?.workout.toUpperCase()}
                </span>
            </h2>
            <div className="flex justify-between">
                <button
                    className="px-3 py-1 md:text-base rounded-md bg-blue-100 text-stone-700 hover:bg-blue-200 hover:text-stone-800 disabled:bg-stone-100"
                    disabled={isTimerStart || isTimerFinish}
                    onClick={handleStartTimer}
                >
                    Start
                </button>

                <Timer duration={currentWorkout?.duration} 
                    isTimerStart={isTimerStart}
                    setIsTimerStart={setIsTimerStart}
                    setIsTimerFinish={setIsTimerFinish}
                />
                    
                <button
                    className="px-3 py-1 md:text-base rounded-md bg-blue-100 text-red-600 hover:bg-blue-200 hover:text-red-700  disabled:bg-stone-100"
                    disabled={!isTimerStart || isTimerFinish}
                    onClick={handleStopTimer}
                >
                    Stop
                </button>
            </div>
            {isTimerFinish && <RateWorkout />}
        </div>
    )
}