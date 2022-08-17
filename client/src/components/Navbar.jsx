import { Link } from "react-router-dom";
const Navbar = () =>{

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Zacznij Ćwiczyć</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Logowanie</Link>
                        <Link to="/signup">Rejestracja</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;