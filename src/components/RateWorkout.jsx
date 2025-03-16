import { useContext, useState } from "react";
import { WorkoutContext } from "../store/workout-context";

export default function RateWorkout() {

    const { updateWorkout } = useContext(WorkoutContext);

    const [ratedStar, setRatedStar] = useState(0);

    function handleRate(star) {
        setRatedStar(star);
        updateWorkout(star)
    }
    console.log(ratedStar)

    return (
        <div className="flex flex-col items-center">
            <h2 className="mt-10 text-xl ">
                How was it ?
            </h2>
            <ul className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                        <button className="mx-1"
                            onClick={() => handleRate(star)}
                        >
                            {ratedStar >= star ? "⭐️" : "✩"}
                        </button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}