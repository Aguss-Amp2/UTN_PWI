import React from 'react'
import './global.css'

function App() {
  return (

    <div className='container'>
      <div className='containerTitleAndImg'>
        <h1 className='title'>Your Cards</h1>
        <img src='https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-ee680d421008-48' alt='Foto Perfil' className='perfil-icon'/>
      </div>
      <div>
      <CashCard
        background={'linear-gradient(to right, #9d48b2, #80398a, #7b3784)'}
        saldo={'256,223'}
        logo_tarjeta={'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'}
        numero={'2234 **** **** 9099'}
        nombre={'Agustin Amposta'}
      />

      <CashCard
        background={'linear-gradient(to right, #2aa0dc, #0892e3, #047fc1)'}
        saldo={'12,223'}
        logo_tarjeta={'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'}
        numero={'2564 **** **** 9119'}
        nombre={'Agustin Amposta'}
      />

      <CashCard
        background={'linear-gradient(to right, #dd4fdd, #d85590, #e4670d)'}
        saldo={'1,223'}
        logo_tarjeta={'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'}
        numero={'1146 **** **** 2245'}
        nombre={'Agustin Amposta'}
      />
    </div>
    </div>
  )
}

const CashCard = ({background, saldo, logo_tarjeta, numero, nombre}) => {
  return(
    <div className='containerCard' style={{background: background}}>
      <div className='contCardHeader'>
        <span>${saldo}</span>
        <img src={logo_tarjeta} className='logo'/>
      </div>

      <div className='Cont-datos'>
        <div className='Cont-Num-Name'>
          <span className='number-card'>{numero}</span>
          <span>{nombre}</span>
        </div>
        <button className='container-btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg></button>
      </div>
    </div>
  )
}
export default App