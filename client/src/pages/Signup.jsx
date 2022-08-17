import { useState } from "react";
import { useSIgnup } from "../components/hooks/useSignUp";


const Signup = ()=>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const { signup, loading, error } = useSIgnup()

const handleSubmit = async (e) =>{
    e.preventDefault()
    await signup(email, password)
}

return(
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Rejestracja</h3>

        <label htmlFor="">Email</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>

        <label htmlFor="">Hasło</label>
        <input type="password" 
        value={password}
        onChange={e=> setPassword(e.target.value)}/>

        <button disabled={loading}>Rejestracja</button>

        {error && <div className="error">{error}</div>}
    </form>
)

}

export default Signup;