import React from 'react'
import './global.css'

const RewritePassword = () => {

    return (
        <div className="father">
            <div className="content">
                <h1>Cambie su Contraseña</h1>
                <form className="options">
                    <div>
                        <label htmlFor="password">Password New</label>
                        <input type="text" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="password-repeat">Password Repeat</label>
                        <input type="text" id="password-repeat" name="password-repeat"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RewritePassword