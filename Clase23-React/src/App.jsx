import React from "react"

function App() {
  let num1 = 1
  let num2 = 2

  //Renderizado condicional
  let estaComprado = false
  let esteLogueado = false

  // ejercicio
  let status = 'Abierto'

  // Ejercicio 2 Si el espacio actual es igual al espacio minimo o esta por 2 unidades cerca entonces mostrar un span con una advertencia con un boton de mejorar plan
  let espacioConsumido = 8
  let espacioTotal = 10
  let porcentajeDeEspacioLimite = espacioTotal * 0.2
  let espacioCercaDelLimite = espacioConsumido >= espacioTotal - porcentajeDeEspacioLimite
  return (
    <div className="caja caja-espacial">
      <h1>Hello World</h1>
      <Caja/>
      <Caja/>
      <Caja/>

      {
        <div>
          <div></div>
          <div></div>
        </div>
      }

      {
        true &&
        <div>
          <div></div>
          <div></div>
        </div>
      }

      <h2>Resultado entre sumar {num1} + {num2} = {num1 + num2}</h2>
      {
        estaComprado
        ?<button>Comprado</button>
        :<button>Comprar</button>
      }

      <button disabled={estaComprado}>Comprar</button>

      {!esteLogueado && <a href="#">Login</a>}

      {/* Ejercicio */}
      <br/>
      <h1>Status server: {status}</h1>
      {
        status === 'Abierto'
        ? <button>Cerrar</button>
        : <button>Abrir</button>
      }

      {/* Ejercicio 2 */}
      {
        espacioCercaDelLimite &&
        <div>
          {
            espacioConsumido === espacioTotal
              ? <span>!Espacio maximo consumido </span>
              : (
                espacioConsumido > espacioTotal
                  ? <span>No puedes hacer mas operaciones, has consumido todo tu espacio </span>
                  : <span>!Estas cerca de consumir el limite de espacio </span>
              )
          }
          <a href="#">Mejorar plan</a>
        </div>
      }
    </div>
  )
}

function Caja(){
  return (
    <div>
      <div>Hola</div>
      <div>Chau</div>
    </div>
  )
}

export default App

/*
Los componentes son:
Funciones que devuelven JSX(HTML)

*/