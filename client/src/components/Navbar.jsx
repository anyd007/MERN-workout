import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";

const Navbar = () =>{
const { logout } = useLogout()
const { user } = useAuthContext()

const handleClick = () =>{
    logout()
}
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Zacznij Ćwiczyć</h1>
                </Link>
                <nav>
                   {user && ( <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Wylogowanie</button>
                    </div>
                   )}

                   {!user && ( <div>
                        <Link to="/login">Logowanie</Link>
                        <Link to="/signup">Rejestracja</Link>
                    </div>
                   )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;