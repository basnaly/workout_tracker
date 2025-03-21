import { useContext } from 'react';
import { WorkoutContext } from '../store/workout-context';
import DisplayRating from './DisplayRating';

export default function Sidebar() {

    const { workouts, deleteWorkout } = useContext(WorkoutContext);

    console.log(workouts)

    return (
        <aside className="w-1/3 bg-blue-200 overflow-auto flex flex-col">
            <h2 className="text-2xl m-8">
                My workouts
            </h2>
            {workouts.length === 0 && (
                <p className="ms-8 text-[1.1rem]">
                    You don't have workouts yet!
                </p>
            )}
            {workouts.length > 0 && (
                <ul className="my-3 overflow-auto">
                    {workouts.map((workout) => (
                        <li className="m-4 flex items-center"
                            key={workout?.id}
                        >
                            <div>
                                <div>{workout?.date}</div>
                                <div className="text-[1rem] font-bold">
                                    {workout?.workout?.toUpperCase()}
                                </div>
                                <div>Duration: {workout?.duration} minutes</div>
                                <div className='flex'>
                                    Rating: 
                                    <DisplayRating rating={workout?.rating} />
                                </div>
                            </div>

                            <button 
                                onClick={() => deleteWorkout(workout.id)}
                                className="ms-5 px-3 py-1 md:text-base rounded-md bg-stone-100 text-red-600 hover:bg-stone-200 hover:text-red-700">
                                Delete
                            </button>
                        </li>

                    ))}
                </ul>
            )}
        </aside>
    )
}