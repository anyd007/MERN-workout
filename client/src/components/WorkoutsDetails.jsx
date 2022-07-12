

const WorkoutsDetails = ({workout}) =>{

    return(
       <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Obciążenie:</strong>{workout.load}</p>
        <p><strong>Ilość powtórzeń:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
       </div>
    )
}

export default WorkoutsDetails;