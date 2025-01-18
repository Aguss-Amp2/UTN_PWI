import filesystem from 'fs'

export const deleteUser = async({email}) =>{
    const users = JSON.parse(await filesystem.promises.readFile('./database/users.json',{encoding: 'utf8'}))
    const updatedUsers = users.filter(user => user.email !== email)
    await filesystem.promises.writeFile('./database/users.json', JSON.stringify(updatedUsers, null, 2), {encoding: 'utf8'})
    return updatedUsers
}