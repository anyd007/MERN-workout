import { useState } from "react";


const Login = ()=>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email, password);
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

        <button>Logowanie</button>
    </form>
)

}

export default Login;