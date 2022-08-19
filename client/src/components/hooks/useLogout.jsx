import { useAuthContext } from "./useAuthContext"
import { useWorkoutContext } from "./useWorkoutContext"

export const useLogout = () =>{
const { dispatch } = useAuthContext()
const { dispatch: workoutDispath } = useWorkoutContext()

    const logout = () =>{
        // usówanie danych logowania z local-storage
        localStorage.removeItem('user')

        //useReducer dispach wylogowanie
        dispatch({type: 'LOGOUT'})
        workoutDispath({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}