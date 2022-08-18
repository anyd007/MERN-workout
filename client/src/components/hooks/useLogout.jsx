import { useAuthContext } from "./useAuthContext"

export const useLogout = () =>{
const { dispatch } = useAuthContext()

    const logout = () =>{
        // usówanie danych logowania z local-storage
        localStorage.removeItem('user')

        //useReducer dispach wylogowanie
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}