const nombres_columnas = [
    'selected',
    'Title',
    'Name',
    'Description',
    'Date',
    'Origin',
    'Status',
    'Process ID',
]

const registros = [
    {
        'Title': 'Primer ejemplo',
        'Name': 'Primer ejemplo',
        'Description': 'Primer ejemplo',
        'Date': 'Primer ejemplo',
        'Origin': 'Primer ejemplo',
        'Status': 'inactive',
        'Process ID': 'Primer ejemplo',
        'selected': false,
    },
    {
        'Title': 'Segundo ejemplo',
        'Name': 'Segundo ejemplo',
        'Description': 'Segundo ejemplo',
        'Date': 'Segundo ejemplo',
        'Origin': 'Segundo ejemplo',
        'Status': 'active',
        'Process ID': 'Segundo ejemplo',
        'selected': false,
    },
    {
        'Title': 'Tercer ejemplo',
        'Name': 'Tercer ejemplo',
        'Description': 'Tercer ejemplo',
        'Date': 'Tercer ejemplo',
        'Origin': 'Tercer ejemplo',
        'Status': 'active',
        'Process ID': 'Tercer ejemplo',
        'selected': true,
    },
]

const nombresColumnasHTML = document.getElementById('nombre-columnas')
let columnas = '<input type="checkbox" class="container-checkbox check-colum">'
for(let i = 1; i < nombres_columnas.length; i++){
    columnas += `
        <button class="btn-container">${nombres_columnas[i]}<i class="bi bi-arrow-down"></i></button>
    `
}
nombresColumnasHTML.innerHTML = columnas


const registrosHTML = document.getElementById('registros')
let registro = ''


for(let i = 0; i< registros.length; i++){
    let checkSelected = registros.selected === true
    let registroCheck = registros[i].Status === 'active'
    registro += `
    <div class='registro-fila'>
        ${
            checkSelected ? '<div><input type="checkbox" class="container-checkbox check-fila-true margin"></div>' : '<div><input type="checkbox" class="container-checkbox check-fila margin"></div>'
        }
        <div>
            ${registros[i].Title}
        </div>
        <div>
            ${registros[i].Name}
        </div>
        <div>
            ${registros[i].Description}
        </div>
        <div>
            ${registros[i].Date}
        </div>
        <div>
            ${registros[i].Origin}
        </div>
        <div>
            ${registroCheck ? '<span class="color-active"><i class="bi bi-circle-fill"></i>active</span>' : '<span class="color-inactive"><i class="bi-inac bi-circle-fill"></i>inactive</span>'}
        </div>
        <div>
            ${registros[i]['Process ID']}
        </div>
    </div>`
}

registrosHTML.innerHTML = registro