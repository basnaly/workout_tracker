import { useState, useEffect, useRef } from "react";

export default function Timer({ duration, isTimerStart, setIsTimerStart, setIsTimerFinish }) {

    const initialDuration = duration * 60;
    const interval = useRef();

    const [remainingTime, setRemainingTime] = useState(initialDuration);

    useEffect(() => {
        if (isTimerStart) {
            interval.current = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000) 
        } else {
            clearInterval(interval.current);
        }
            
    }, [isTimerStart])

    useEffect(() => {
        if (remainingTime <= 0) {
            setIsTimerStart(false);
            clearInterval(interval.current);
            setIsTimerFinish(true);
        }
    }, [remainingTime])

    let minutes = Math.floor(remainingTime / 60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = remainingTime - (minutes * 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
       
    return (
        <>
            <div 
                className="mx-10 px-20 py-1 text-2xl font-bold border-1 rounded-md">
                {minutes} : {seconds}
            </div>

        </>
    )
}