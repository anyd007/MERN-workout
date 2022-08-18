import { useState } from "react";
import { useLogin } from "../components/hooks/useLogin";

const Login = ()=>{
const { login, error, loading } = useLogin()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (e) =>{
    e.preventDefault()
    await login(email, password);
    console.log(error);
}

return(
    <form className="login" onSubmit={handleSubmit}>
        <h3>Logowanie</h3>

        <label htmlFor="">Email</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>

        <label htmlFor="">Hasło</label>
        <input type="password" 
        value={password}
        onChange={e=> setPassword(e.target.value)}/>

        <button disabled={loading}>Logowanie</button>
        {error && <div className="error">{error}</div>}
    </form>
)

}

export default Login;