
export default function Sidebar({ workouts }) {

    return (
        <aside className="w-1/3 bg-blue-200">
            <h2 className="text-2xl my-16 ms-8">
                My workouts
            </h2>
            {workouts.length === 0 && <p>You don't have workouts yet!</p> }
            {workouts.length > 0 && (
                <div className="m-3">
                    {workouts.map((workout) => (
                        <ul className="m-4"
                            key={workout.id}
                        >
                            <li>{workout.date}</li>
                            <li className="text-[1rem] font-bold">
                                {workout.workout.toUpperCase()}
                            </li>
                            <li>Duration: {workout.duration}</li>
                            <li>{workout.fillings}</li>
                        </ul>
                    ))}
                </div>
            )}

        </aside>
    )
}