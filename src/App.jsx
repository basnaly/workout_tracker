import Sidebar from './components/Sidebar'
import Starting from './components/Srarting'
import WorkoutContextProvider from './store/workout-context';

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

function App() {

	return (
		<WorkoutContextProvider>
			<main className='h-screen flex'>
				<Sidebar />
				<Starting />
			</main>
		</WorkoutContextProvider>
	)
}

export default App;
