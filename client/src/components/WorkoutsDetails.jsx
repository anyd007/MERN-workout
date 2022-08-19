import { useWorkoutContext } from "./hooks/useWorkoutContext"
import { useAuthContext } from './hooks/useAuthContext'
import { FcFullTrash } from 'react-icons/fc';
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { pl } from 'date-fns/locale'


const WorkoutsDetails = ({workout}) =>{
    const { dispatch } = useWorkoutContext()
    const {user} = useAuthContext()

    const handleClick = async () =>{
        if(!user){
            return
        }
        const response = await fetch("/api/workouts/" + workout._id, {
            method: "DELETE",
            headers: {'Authorization': `Bearer ${user.token}`}
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload:json})
        }
    }
    return(
       <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Obciążenie:</strong>{workout.load}</p>
        <p><strong>Ilość powtórzeń:</strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix:true, locale: pl })}</p>
        <span onClick={handleClick}><FcFullTrash className="trash-icon"/></span>
       </div>
    )
}

export default WorkoutsDetails;