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

Desarrollar la siguiente tabla de datos.

Parte 1:
Utilizar el nombre_columnas para renderizar las columnas de arriba de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='nombre_columnas'>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
</div>
Luego aplicar los estilos para que esten en la misma fila. (usar de referencia el figma)

Parte 2:
Utilizar registros para renderizar los datos de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='registros'>
    <div class='registro-fila'>
        <div>
            <input type="checkbox" checked (puede no estar este valor, depende de si tiene o no selected)>
        </div>
        <div>
            {registro.Title}
        </div>
        <div>
            {registro.Name}
        </div>
        <div>
            {registro.Description}
        </div>
        <div>
            {registro.Date}
        </div>
        <div>
            {registro.Origin}
        </div>
        <div>
            {registro.Status}
        </div>
        <div>
            {registro['Process ID']}
        </div>
    </div>
</div>

Link de figma de referencia:[text](https://www.figma.com/design/bWhe7ecD77qANPk03gAK60/Tables-(Community)?node-id=1-2&node-type=canvas&t=YLnxfeuWOdQGfDvv-0)