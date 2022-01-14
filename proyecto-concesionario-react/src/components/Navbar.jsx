import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <ul className='ulNavbar'>
                <li>Logo</li>
                <li>Navegación 1</li>
                <li>Navegación 2</li>
                <li className='liButton'>
                    <Link to="/login">
                        <button  className='IniciarSesionBtn'>Iniciar Sesión</button>
                    </Link>
                </li>
            </ul>
           
        </nav>
    )
}

export default Navbar
