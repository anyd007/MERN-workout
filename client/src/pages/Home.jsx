import { useEffect} from "react"
import { useWorkoutContext } from "../components/hooks/useWorkoutContext"
import WorkoutsDetails from "../components/WorkoutsDetails"
import WorkoutForm from "../components/WorkoutForm"
import { useAuthContext } from "../components/hooks/useAuthContext"

const Home = () =>{
    const { workouts, dispatch } = useWorkoutContext()
    const {user} = useAuthContext()
    
    useEffect(()=>{
        const feachWorkout = async ()=>{
            const response = await fetch('/api/workouts/', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(response.ok){
                dispatch({type:'SET_WORKOUTS', payload:json})
            }
        }
        if(user){
            feachWorkout()
        }
    }, [dispatch, user])
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