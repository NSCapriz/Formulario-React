import { useState } from "react";

const Formulario = () => {
   
    return ( 
        <>
            <h1>Registrarse</h1>
            <form >
                <div>
                    <label htmlFor="nombre"> Nombre: </label>
                    <input type="text"  placeholder="Ingrese su nombre"/>
                </div>
                <div>
                    <label htmlFor="apellido"> Apellido: </label>
                    <input type="text"  placeholder="Ingrese su apellido" />
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="mail"  placeholder="Ingrese su mail"/>
                </div>
                <div>
                    <label htmlFor="telefono"> Teléfono: </label>
                    <input type="number"  placeholder="Ingrese su número de teléfono"/>
                </div>
                <div>
                    <label htmlFor="password" > Contraseña: </label>
                    <input type="password" placeholder="Ingrese una contraseña"  />
                </div>
                <div>
                    <label htmlFor="password"> Confirmar contraseña: </label>
                    <input type="password"  placeholder="Reingrese su contraseña"/>
                </div>
                <button> Enviar</button>
            </form>
        </>
    );
}

export default Formulario


