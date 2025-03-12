import { useState } from "react";

export default function RateWorkout() {

    const [star, setStar] = useState(0);

    function handleRate() {
        setStar();
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className="mt-10 text-xl ">
                How was it ?
            </h2>
            <ul className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <li key={star}>
                        <button className="mx-1">⭐️</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}