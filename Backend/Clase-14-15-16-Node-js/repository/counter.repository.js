import filesystem from 'fs'

export const getAddInincrementCounter = async(database_name) => {
    const contadores = JSON.parse(await filesystem.promises.readFile('./database/id.counter.json'))
    const contador_actual = contadores[database_name]
    contadores[database_name]++
    await filesystem.promises.writeFile('./database/id.counter.json', JSON.stringify(contadores))
    return contador_actual
}