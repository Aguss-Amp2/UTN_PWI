const usuariosList = [
    {
        nombre: 'Adrian Mogus',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EVD3GPV2-4c4cd3e0784e-24",
        status: true
    },
    {
        nombre: 'Agostina Diaz',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQWAHMH-0966cb0d7244-24",
        status: true
    },
    {
        nombre: 'Agustin Rossa',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU73JUS-1e977693b7bd-24",
        status: true
    },
    {
        nombre: 'Alan Flores',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1URUJ1-384421a19e45-24",
        status: false
    },
    {
        nombre: 'Candia',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESQU0R7D-ea383db445e8-24",
        status: true
    },
    {
        nombre: 'Fede Rabbia',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07ESU2R35Y-e7a6bc16ffb4-24",
        status: false
    },
    {
        nombre: 'Leandro Bolletta',
        avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ3ET7RB-ffafbbc87ff9-24",
        status: false
    }
]

const contactosHTML = document.getElementById('usuarios')

let texto = ''
for(let usuario of usuariosList){
    let online = usuario.status === true
    texto += `
        <div class="contenedor-usuario">
            <img class="img-usuario" src=${usuario.avatar}>
            <span>
                <i class="bi bi-circle-fill border-conect border-conect-2 ${online ? 'conect' : 'disconect'}"></i>
            </span>
            <h2 class="nombre-usuario">${usuario.nombre}</h2>
        </div>
    `
}
contactosHTML.innerHTML = texto