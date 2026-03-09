import { Link } from "react-router-dom";
import { logout } from "../services/auth";

import logo from "../assets/img/logo blanco.png";
import avatar from "../assets/img/avatar.png";
import logoutIcon from "../assets/img/log-out.png";

export default function Navbar() {

    const rol = localStorage.getItem("rol");

    return (

        <header className="main-header">

            <div className="header-container">

                <nav className="nav-menu">

                    <Link to="/inicio" className="logo">
                        <img src={logo} />
                    </Link>

                    <div className="nav-links">

                        <Link to="/inicio">
                            Inicio
                        </Link>

                        <Link to="/mis-requerimientos">
                            Mis Requerimientos
                        </Link>

                        {rol !== "user" && (
                            <Link to="/validacion">
                                Validación
                            </Link>
                        )}

                    </div>

                    <div className="nav-actions">

                        <Link to="/perfil" className="perfil-btn">
                            <img src={avatar} />
                        </Link>

                        <button className="logout-btn" onClick={logout}>
                            <img src={logoutIcon} />
                        </button>

                    </div>

                </nav>

            </div>

        </header>

    );

}