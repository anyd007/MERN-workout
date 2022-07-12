import { useEffect} from "react"
import { useWorkoutContext } from "../components/hooks/useWorkoutContext"
import WorkoutsDetails from "../components/WorkoutsDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () =>{
    const { workouts, dispatch } = useWorkoutContext()
    
    useEffect(()=>{
        const feachWorkout = async ()=>{
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS', payload:json})
            }
        }

        feachWorkout()
    }, [dispatch])
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutsDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home