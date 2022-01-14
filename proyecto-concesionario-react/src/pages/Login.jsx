import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='Login'>
            <h2 className='h2Login'>Inicia Sesión En Tu Cuenta</h2>
            <form className='FormLogin'>
                <div>
                    <input className='InputEmailPass' type="email" placeholder='prueba@gmail.com' required/>
                    <input className='InputEmailPass' type="password" required/>  
                </div>
                <div>
                    <label htmlFor='recuerdame'>
                        <input type="checkbox" name='recuerdame'/>
                        Recuérdame
                    </label>
                    <div>
                        <Link to= "/">
                            ¿Olvidtaste tu contraseña?
                        </Link>
                    </div>
                    <div>
                        <Link to= "/admin">
                        <button type='submit'>Iniciar Sesión</button>
                        </Link>
                    </div>
                    <div>
                        <button>Continúa con Google</button>
                    </div>
                </div>
            </form>    
        </div>
    )
}

export default Login
